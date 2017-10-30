module.exports = {
  entry: './src/index.ts',
  presets: [
    require('poi-preset-babel-minify')(),
    require('poi-preset-typescript')(),
    require('poi-preset-karma')({
      files: [ 'test/unit/**/*.test.ts' ],
    }),
  ]
}
