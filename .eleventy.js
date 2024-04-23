module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/css/style.css')
  eleventyConfig.addPassthroughCopy('./src/js')
  eleventyConfig.addPassthroughCopy('./src/images')

  // Using Browser Sync because Eleventy Dev Server does not seem to hot-reload browser until browser window is active in Firefox on macOS when CSS file is changed (Seems fine for other file types 🤷‍♂️)
  //   eleventyConfig.setServerOptions({
  //     module: '@11ty/eleventy-server-browsersync',
  //
  //     // Default Browsersync options shown:
  //     port: 8080,
  //     open: true,
  //     notify: false,
  //     ui: false,
  //     ghostMode: false,
  //
  //     // Opt-out of the Browsersync snippet
  //     // snippet: false,
  //   })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },

    // Set templating language for .md files to nunjucks (default is liquid)
    markdownTemplateEngine: 'njk',
  }
}
