import globals from "globals";
import pluginJs from "@eslint/js";
import jsdoc from 'eslint-plugin-jsdoc';

export default [
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  jsdoc.configs['flat/recommended-typescript-flavor-error'],
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'warn',
      'jsdoc/check-param-names' : 'error',
      'jsdoc/check-types': 'error',
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-returns': 'error',
      'jsdoc/require-returns-type': 'error',
      'jsdoc/require-jsdoc': 'error',
      'jsdoc/valid-types': 'error',
    }
  },
];