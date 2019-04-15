const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const projectRoot = path.resolve(__dirname)

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/app.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs')
  },
  resolve: {
		alias: {
			'@': projectRoot + '/src',
			'@components': projectRoot + '/src/components',
      '@styles': projectRoot + '/src/styles',
      '@assets': projectRoot + '/assets',
    },
    extensions: [
      '.js', '.json', '.css', '.scss', '.sass',
      '.svg', '.png', '.jpeg', '.gif'
    ],
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
          }, 'resolve-url-loader', 'sass-loader']
        }),
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 512,
            quality: 85
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    }),
  ]
};
