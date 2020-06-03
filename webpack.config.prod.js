import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const mainJsFileName = 'app'

module.exports = {
  mode: 'production',
  entry: {
    [mainJsFileName]: `./${process.env.SCRIPTS_FOLDER}/index.js`,
    otherEntry: `./${process.env.SCRIPTS_FOLDER}/otherEntry.ts`
  },
  output: {
    filename: '[name].js',
    path: __dirname + process.env.DEST
  },
  /* Uglify JS in production */
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
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
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  }
}
