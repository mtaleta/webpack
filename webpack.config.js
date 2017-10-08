var path = require('path');
var webpack = require('webpack');

module.exports = {
  //souce檔位置,絕對路徑
  //dirname代表webpack.config.js的資料夾
  //entry從哪開始看,在context底下的main.js
  //output放在哪個資料夾
  //filename的[]指main即main.bundle.js
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [[ 'es2015', { modules: false }]],
              plugins: ['transform-class-properties']
            }
          }
        ]
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin({name:
  'vendor', filename: 'vendor.bundle.js', minChunks: 2})]
};
/*module內在說明包package時可以去看一些額外的檔案
看css檔,用style-loader', 'css-loader'把css檔轉成module */


  /*在package.json內
    script設定要run的script
    可以不用接./node_modules 
    "watch":"webpack -w" 
    -w指watch module  
  */