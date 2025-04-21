module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        // --- General ESLint rules ---
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'off', // handled by TS
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],


        // --- React ---
        'react/prop-types': 'off', // TS handles prop validation
        'react/react-in-jsx-scope': 'off', // not needed in React 17+
        'react/jsx-uses-react': 'off',
        'react/jsx-uses-vars': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],

        // --- React Hooks ---
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // --- TypeScript ---
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
