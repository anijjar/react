const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  mode: "production", 
  performance: {
   hints: false,
   maxEntrypointSize: 512000,
   maxAssetSize: 512000
},
optimization: {
  runtimeChunk: 'single',
  moduleIds: 'deterministic',
  splitChunks: {
      cacheGroups: {
          vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
          },
      },
  },
},
  output: {
    filename: '[name].[contenthash].js',
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
         test: /\.svg$/,
         use: ['@svgr/webpack'],
       },
      {
         test: /\.(png|jp(e*)g|svg|gif)$/,
         use: ['file-loader'],
       },
      {
         test: /\.css$/i,
         use: ["style-loader", "css-loader"],
       },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
}