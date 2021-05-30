module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'max-len': ['error', { code: 120 }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
