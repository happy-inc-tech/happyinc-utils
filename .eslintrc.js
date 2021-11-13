module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        'no-console': 'error',
        'no-debugger': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/ban-ts-comment': 'off'
    }
};
