const shuffle = require('lodash.shuffle');

module.exports = function(eleventyConfig) {

  // Add shuffle filter to randomize arrays
  eleventyConfig.addFilter('shuffle', function(arr) {
    return shuffle(arr);
  });

};