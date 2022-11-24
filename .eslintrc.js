module.exports = {
  env: {
    'node': true,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 4
      },
      'multiline': {
        'max': 4
      }
    }],
    'vue/script-indent': ['error', 2, {'baseIndent': 0}]
  },
}
