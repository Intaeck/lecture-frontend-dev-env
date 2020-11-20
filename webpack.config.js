const path = require('path');
const MyWebpackPlugin = require('./my-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  // loader를 추가 - module객체에 rules 규칙배열에 로더 설정
  module: {
    // 로더의 규칙 배열 - css..
    rules: [
      {
        test: /\.css$/,
        // loader의 설정순서가 중요함 - loader는 뒤에서부터 적용되기 때문에 css-loader적용 후 style-loader를 적용해야함
        use: ['style-loader', 'css-loader']
      },
      // file loader
      // {
      //   test: /\.(jpg|png)$/,
      //   loader: 'file-loader',
      //   options: {
      //     //원본파일 이름.확장자 ?쿼리스트링 해시(웹팩이 빌드될 때마다 변경됨)
      //     name: '[name].[ext]?[hash]',
      //     //호출할 파일이 있는 디렉토리 지정
      //     publicPath: './dist'
      //   }
      // }
      // url loader
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          publicPath: './dist',
          limit: 10000  // 10kb 미만은 url-loader가 처리, 이상은 file-loader가 처리
        }
      }
    ]
  },
  // plugin 설정
  plugins : [
    new MyWebpackPlugin(),
  ]
}
