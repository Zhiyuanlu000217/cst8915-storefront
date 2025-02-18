const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    node: {
      __dirname: true,
      __filename: true
    }
  }
})
