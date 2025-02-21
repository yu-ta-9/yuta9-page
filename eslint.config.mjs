import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import pluginConfigPrettier from 'eslint-config-prettier';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import typescriptEslint from 'typescript-eslint';
import typescriptEslintParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    ignores: ['.next', 'dist/**', '**/*.css.d.ts', '**/*.css.d.ts.map', 'eslint.config.mjs'],
  },
  pluginJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.config({
    extends: ['next'],
  }),
  pluginConfigPrettier,
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptEslintParser,
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.mjs',
            'stylelint.config.mjs',
            'postcss.config.js',
            'next.config.js',
            'next-i18next.config.js',
            '.svgrrc.js',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: pluginImport,
      'unused-imports': pluginUnusedImports,
      'jsx-a11y': pluginJsxA11y,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      '@next/next/no-img-element': 'off',
      'import/no-default-export': 'error',
      'import/no-anonymous-default-export': ['error', { allowArray: false }],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'all',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    files: ['*.mjs'],
    rules: {
      'import/no-anonymous-default-export': ['error', { allowArray: true, allowObject: true }],
    },
  },
];
