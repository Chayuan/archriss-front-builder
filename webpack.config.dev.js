import webpack from 'webpack'

const mainJsFileName = 'app'

module.exports = {
  mode: 'development',
  entry: {
    [mainJsFileName]: `./${process.env.SCRIPTS_FOLDER}/index.js`,
    otherEntry: `./${process.env.SCRIPTS_FOLDER}/otherEntry.ts`
  },
  output: {
    filename: '[name].js',
    path: __dirname + process.env.DEST
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['css-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ]
}
