const shuffle = require('lodash.shuffle');

module.exports = function(eleventyConfig) {

  // Don't try to build asset files, just transparently copy them through
  eleventyConfig.addPassthroughCopy("assets");

  // Add shuffle filter to randomize arrays
  eleventyConfig.addFilter('shuffle', function(arr) {
    return shuffle(arr);
  });

};