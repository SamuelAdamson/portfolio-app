import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,ts}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            ...eslintConfigPrettier.rules,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
