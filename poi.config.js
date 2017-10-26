module.exports = {
  presets: [
//    require('poi-preset-typescript')(),
    require('poi-preset-karma')({
    }),
  ],
  karma: {
    frameworks: [ 'chai' ],
  },
}
