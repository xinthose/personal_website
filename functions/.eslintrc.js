module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "object-curly-spacing": ["error", "never"],
    "max-len": "off",
    "require-jsdoc": "off",
    "indent": "off",
  },
};