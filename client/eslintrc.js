export default {
  root: true, // Ensure ESLint starts from this config
  env: {
    browser: true,
    node: true, // Enable Node.js environment for the client folder
  },
  extends: ['eslint:recommended'],
  rules: {
    "no-undef": ["error", { varsIgnorePattern: "module" }], // Ignore undefined errors for 'module'
  },
  ignorePatterns: ["dist/", "dist/**/*"], // Ignore files in the dist folder
  overrides: [
    {
      files: ["dist/**/*"],
      rules: {
        "no-unused-vars": "off", // or any other rule you want to disable for dist files
      },
    },
  ],
};
