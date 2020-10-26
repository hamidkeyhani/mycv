module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          data: `@import "@/styles/_variables.scss";`
        }
      }
    }
  }
}
