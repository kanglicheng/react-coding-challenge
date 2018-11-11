const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './main.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: [/\.js$|.jsx$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'babel-preset-es2015', 'babel-preset-stage-2', 'babel-preset-react' ]
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]  
      },
      {
        test: /\.(woff(2)?|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      historyApiFallback: true,
      disableHostCheck: true
    }
  };
};
