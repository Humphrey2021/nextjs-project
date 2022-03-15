const withLess = require('next-with-less')
const variable = require('./styles/variable.json')

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: variable
    }
  }
})
