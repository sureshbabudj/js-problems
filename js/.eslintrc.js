module.exports = {
  env: {
    node: true,
    es2021: true,
    jasmine: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "import/extensions": 'ignorePackages',
  },
};
