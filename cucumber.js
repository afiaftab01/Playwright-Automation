module.exports = {
  default: {
    require: [
      './step_definitions/**/*.js',
      './core/**/*.js'
    ],
    paths: ['./features/**/*.feature'],
    format: [
      'allure-cucumberjs/reporter'
      ]
  }
};