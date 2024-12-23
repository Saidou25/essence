import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Includes the browser globals
        jest: true, // Enable Jest globals like `test`, `expect`, `beforeEach`, etc.
        describe: "readonly", // Explicitly define Jest's `describe` function as read-only
        test: "readonly", // Explicitly define Jest's `test` function as read-only
        expect: "readonly", // Explicitly define Jest's `expect` function as read-only
        beforeEach: "readonly", // Explicitly define Jest's `beforeEach` function as read-only
        global: "readonly", // Explicitly define Jest's `global` object as read-only
        module: "readonly", // Explicitly define `module` as read-only (e.g., for Node.js)
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  pluginJs.configs.recommended, // JS plugin recommended rules
  pluginReact.configs.flat.recommended, // React plugin recommended rules
  {
    plugins: {
      jest: pluginJest, // Adding Jest plugin
    },
    rules: pluginJest.configs.recommended.rules, // Applying Jest plugin rules
  },
  {
    ignores: ["dist/*", "dist/**/*"], // Exclude dist folder
  },
];
