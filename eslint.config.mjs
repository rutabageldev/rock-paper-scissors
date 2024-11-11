import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  languageOptions: {
    globals: globals.browser,
    ecmaVersion: "latest", // Ensures latest ECMAScript features are supported
    sourceType: "module", // Allows usage of import/export statements
  },
  plugins: {
    react: pluginReact,
  },
  rules: {
    // Add custom rules or overrides as needed
    "react/react-in-jsx-scope": "off", // Commonly disabled when using Next.js or similar frameworks
  },
  ...pluginJs.configs.recommended,
  ...pluginReact.configs.flat.recommended,
};
