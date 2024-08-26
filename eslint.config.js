import eslintPluginPlaywright from "eslint-plugin-playwright";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintParserTypescript from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: eslintParserTypescript,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      playwright: eslintPluginPlaywright,
    },
    rules: {
      // Basic ESLint rules (similar to eslint:recommended)
      eqeqeq: "warn",
      curly: "warn",
      "no-unused-vars": "warn",
      "no-console": "off",

      // TypeScript-specific rules (similar to @typescript-eslint/recommended)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_", // Ignore arguments that start with _
          varsIgnorePattern: "^_", // Ignore variables that start with _
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",

      // Playwright-specific rules
      ...eslintPluginPlaywright.configs.recommended.rules,
    },
  },
];
