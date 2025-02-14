import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import typeScriptESLintParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});

export default [
  {
    ignores: ['dist/**', '**/*.mjs', '**/*.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  ...compat.config({
    extends: ['next'],
  }),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typeScriptESLintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
      },
    },
    settings: {
      // 'import/resolver': {
      //   node: {
      //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      //   },
      //   typescript: {
      //     alwaysTryTypes: true,
      //     config: 'tsconfig.json',
      //   },
      // },
      // react: {
      //   version: 'detect',
      // },
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'import/no-default-export': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      // 'import/order': [
      //   'error',
      //   {
      //     alphabetize: {
      //       caseInsensitive: true,
      //       order: 'asc',
      //     },

      //     groups: ['builtin', 'external', 'internal', 'index', 'type', 'sibling', 'parent'],
      //     'newlines-between': 'always',

      //     pathGroups: [
      //       {
      //         group: 'internal',
      //         pattern: 'src/components/**',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/constants',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/hooks/**',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/lib/**',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/provider/**',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/stores/**',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/styles/**',
      //         position: 'before',
      //       },
      //       {
      //         group: 'internal',
      //         pattern: 'src/utils/**',
      //         position: 'before',
      //       },
      //     ],
      //   },
      // ],
    },
  },
];
