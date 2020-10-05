module.exports = {
  outputDir: 'D:\\CDC-CBIT-2021\\server\\public',
  devServer: {
    proxy: {
      'api/': {
        target: 'http://localhost:3080'
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
