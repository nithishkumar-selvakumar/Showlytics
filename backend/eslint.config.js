import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-console": "warn", // warn if console.log is used
      "no-unused-vars": "error", // catch unused variables
      "consistent-return": "error", // ensure all code paths return a value
    },
  },
  js.configs.recommended,
  prettierConfig,
];
