module.exports = {
  presets: [
    require('poi-preset-babel-minify')(),
    require('poi-preset-typescript')(),
    require('poi-preset-karma')(),
  ],

  entry: './src/index.ts',

  webpack(config) {
    config.output.publicPath = ''
    config.devtool = 'inline-source-map'
    return config
  },
  devServer: {
    proxy: 'https://jsonplaceholder.typicode.com/posts'
  },

  karma: {
    files: [ 'test/unit/**/*.test.ts' ],
    frameworks: [
      'mocha', 'chai', 'karma-typescript'
    ],
    reporters: [ 
      'mocha', 'karma-typescript'
    ],
    preprocessors: {
      'test/unit/*.test.ts': [ 'webpack', 'karma-typescript' ]
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json',
      compilerOptions: {
        module: 'commonjs'
      },
      exclude: [ 'node_modules' ]
    },
  }
}
