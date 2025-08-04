const env = process.env.TEST_ENV || 'dev';

const configMap = {
  dev: require('./dev')
};

module.exports = configMap[env];
