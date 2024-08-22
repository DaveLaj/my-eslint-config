import jsdoc from 'eslint-plugin-jsdoc';

const config = [
    jsdoc.configs['flat/recommended-error'],
    jsdoc.configs['flat/recommended'],
    {
        files: ['**/*.js'],
        plugins: {
            jsdoc,
        },
        rules: {
            'jsdoc/require-description': 'warn'
        }
    },
];

export default config;