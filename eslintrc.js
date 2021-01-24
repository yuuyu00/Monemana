module.exports = {
  extends: ["plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  rules: {
    "no-console": "warn",
    "no-return-await": "error",
  },
};
