const shuffle = require('lodash.shuffle');

module.exports = function(eleventyConfig) {

  // Don't try to build pages from these files
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("README.md");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Add shuffle filter to randomize arrays
  eleventyConfig.addFilter('shuffle', function(arr) {
    return shuffle(arr);
  });

};