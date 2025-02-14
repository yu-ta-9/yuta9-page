/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  rules: {
    'no-empty-source': true,
    'selector-pseudo-element-no-unknown': true,
    'at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'property-no-unknown': true,
    'selector-class-pattern': [
      '',
      {
        resolveNestedSelectors: true,
      },
    ],
    'max-nesting-depth': [
      2,
      {
        ignore: ['pseudo-classes'],
        ignoreAtRules: ['include'],
      },
    ],
    // TODO: add
    // 'unit-allowed-list': ['rem'],
  },
};
