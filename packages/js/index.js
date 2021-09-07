module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'quotes': ['error', 'double'],
        'quote-props': ['error', 'always'],
        'comma-dangle': ['error', 'never'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'exports',
              'main',
              'module',
              'unpkg',
              'bin',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'devDependencies',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
  ],
  rules: {
    'no-underscore-dangle': ['error', { 'allowAfterThis': true, 'enforceInMethodNames': false }],
    'import/no-unresolved': [2, { caseSensitive: true, commonjs: true }],
    'arrow-parens': [2, 'as-needed'],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
    'no-confusing-arrow': ['error', { 'allowParens': true }],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'radix': [2, 'as-needed'],
    'no-eval': 'off',
    'no-new': 'off',
    'prefer-promise-reject-errors': 'off',
    'nonblock-statement-body-position': ['error', 'beside', { 'overrides': { 'if': 'any' } }],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'no-restricted-syntax': 'off',
    'no-throw-literal': 'off',
    'no-continue': 'off',
    'no-use-before-define': 'off',
    'no-await-in-loop': 'off',
    'max-len': [
      'error', {
        code: 130,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      }
    ]
  },
}