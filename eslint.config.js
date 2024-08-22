import globals from "globals";
import pluginJs from "@eslint/js";
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  jsdoc.configs['flat/recommended-error'],
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'error'
    }
  },
];