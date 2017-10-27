module.exports = {
  entry: './src/index.ts',
  presets: [
    require('poi-preset-typescript')({
    }),
    require('poi-preset-karma')({
      frameworks: [ 'mocha', 'chai' ],
      files: [ 'test/unit/*.test.js' ]
    }),
  ]
}
