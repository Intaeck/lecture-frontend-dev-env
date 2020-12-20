module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // npm i eslint-config-prettier eslint-plugin-prettier
    // "plugin:prettier/recommended"을 설정해서 prettier와 eslint의 중복설정을 제거해줌
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // TODO: 프리티어 설정을 추가하세요.
    "rules": {
    }
};