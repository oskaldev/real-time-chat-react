const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-react' ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@screens': path.resolve(__dirname, 'src/components/screens'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@constans': path.resolve(__dirname, 'src/constans'),
      '@fire': path.resolve(__dirname, 'src/firebase'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@routing': path.resolve(__dirname, 'src/routing'),
      '@HOC': path.resolve(__dirname, 'src/HOC'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new DotenvWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  }
}
