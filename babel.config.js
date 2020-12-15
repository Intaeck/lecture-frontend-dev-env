/**
 * TODO: IE11에서도 동작하는 자바스크립트로 변환할수 있게 바벨을 구성하세요.
 */
module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        ie: "11"
      },
      // 폴리필 사용 - ie 11이 처리할 수없는 문법들을 위함
      useBuiltIns: "usage",
      // npm i core-js@2
      corejs: {
        version: 2
      }
      // async await를 사용하기 위해서는 regenerator-runtime을 설치해야함
      //npm i regenerator-runtime 
    }]
  ]
}