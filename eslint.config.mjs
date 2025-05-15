import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Compatibility with traditional config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Your custom rules go here
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",
      "react/no-unescaped-entities": "off",
      "react/no-unescaped-entities": "off"
    }
  }
];

export default eslintConfig;
