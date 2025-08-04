// src/utils/logger.js
const { createLogger, format, transports } = require('winston');
const path = require('path');
const fs = require('fs');

const logDir = './logs'; // Directory for log files

// Create the log directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info', // Default log level, can be set via env variable
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message, ...meta }) => {
      // Customize log format for console
      const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}`;
      if (Object.keys(meta).length) {
        // If there's additional metadata, stringify it
        return `${logMessage} ${JSON.stringify(meta)}`;
      }
      return logMessage;
    })
  ),
  transports: [
    // Console transport (for printing to the terminal)
    new transports.Console({
      format: format.combine(
        format.colorize(), // Add colors to console output
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ timestamp, level, message, ...meta }) => {
          const logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}`;
          if (Object.keys(meta).length) {
            return `${logMessage} ${JSON.stringify(meta)}`;
          }
          return logMessage;
        })
      ),
    }),
    // File transport (for writing to a log file)
    new transports.File({
      filename: path.join(logDir, 'automation.log'),
      level: 'debug', // Log all debug messages and above to file
      maxsize: 5 * 1024 * 1024, // 5MB
      maxFiles: 5,
      tailable: true, // Keep the latest files
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json() // Log to file in JSON format for easier parsing
      ),
    }),
    // Error log file (optional, for critical errors only)
    new transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error', // Only log error messages to this file
      maxsize: 5 * 1024 * 1024, // 5MB
      maxFiles: 5,
      tailable: true,
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json()
      ),
    }),
  ],
  exitOnError: false, // Do not exit on handled exceptions
});

module.exports = logger;
