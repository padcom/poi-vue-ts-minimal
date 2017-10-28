module.exports = {
  entry: './src/index.ts',
  webpack(config) {
    config.output.publicPath = ''
    return config
  },
  devServer: {
    proxy: 'https://jsonplaceholder.typicode.com/posts'
  },
  presets: [
    require('poi-preset-typescript')({
    }),
    require('poi-preset-karma')({
      headless: true,
      frameworks: [ 'mocha', 'chai' ],
      files: [ 'test/unit/**/*.test.ts' ]
    }),
  ]
}
