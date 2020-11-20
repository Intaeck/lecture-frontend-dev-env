const { Compilation } = require('webpack');

class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap('My Plugin', stats => {
    //   console.log('MyPlugin: done');
    // })

    compiler.plugin('emit', (compilation, callback) => {
      //compilation 객체를 통해서 webpack이 번들링한 main.js에 접근해서 가져오는 함수
      const source = compilation.assets['main.js'].source();
      //console.log(source);
      //source함수를 재정의 - main.js 원본코드 상단에 주석처리한 banner가 들어가게 됨
      compilation.assets['main.js'].source = () => {
        const banner = [
          '/**',
          ' * 이것은 BannerPlugin이 처리한 결과입니다.',
          ' * Build Date: 2020-11-20',
          ' */'
        ].join('\n');
        return banner + '\n\n' + source;
      }
      callback();
    })
  }
}

module.exports = MyWebpackPlugin;