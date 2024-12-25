import globals from 'globals';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

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
            'prettier/prettier': 'error',
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.extends('plugin:prettier/recommended'),
];
