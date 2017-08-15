var webpack= require('webpack');

module.exports = {
  entry: [
  'webpack-hot-middleware/client',
  './client/index.js'
  ],
  output: {
    path: require("path").resolve('./client/dist'),
    filename: 'web.bundle.js',
    publicPath:'/'
  },
  plugins:[
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module:{
    loaders: [
     {test: /\.js$/, 
      loader: 'babel-loader', 
      exclude: /node_modules/, 
      query:{
        presets:['es2015','react','react-hmre'],
        plugins: ['react-html-attrs', 'transform-class-properties', 
        'transform-decorators-legacy','transform-object-rest-spread'
        ]
      }
    }
    ]
  }
}
