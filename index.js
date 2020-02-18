const merge = require('lodash/merge')

module.exports = {
  /**
   * Requires all js and ts files in a directory
   *
   * @return {object} object with references to all module exports
   */
  requireAll: function (dirName, config) {
    config = merge({}, config, {
      dirname: dirName,
      excludeDirs: /^(\.git|\.svn|__tests__)$/, // exclude directories
      filter: /(.+)\.[jt]s$/,
      optional: true // silent errors when requiring
    })
    return require('include-all')(config)
  }
}
