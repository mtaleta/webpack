var path = require('path');

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
  }
};

  /*在package.json內
    script設定要run的script
    可以不用接./node_modules 
    "watch":"webpack -w" 
    -w指watch module  
  */