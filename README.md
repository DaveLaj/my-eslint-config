# ESLint Configuration for JavaScript Projects with JSDoc


This is a basic ESLint configuration for JavaScript projects with JSDoc.


## Do I hate TypeScript?


No, in fact I think it is a needed improvement to the JavaScript ecosystem.
Its just a bit more tedious to debug for me as I have to do a manual tracing of the error messages to find the line of code that is causing the error due to the transpiling step the TypeScript compiler does.


## Getting Started


1. Install the ESLint

    ```bash
    npm install -D eslint@latest
    ```


2. Install the ESLint Plugin for JSDoc

    ```bash
    npm install -D eslint-plugin-jsdoc@latest
    ```


3. Configure ESLint

    ```js
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
    }, ...
    ```


4. Initialize Your TypeScript Configuration

    ```bash
    npx tsc --init
    ```


5. Configure Your TypeScript Configuration

    ```json
    {
        "compilerOptions": {
            "allowJs": true,
            "checkJs": true,
            "noEmit": true
        }
    }
    ```


6. Setup Checking during execution

    ```bash
    script: {
        "start": "eslint . && tsc && node main.js"
    }
    ```
