module.exports = {
  ...require('prettier-config-standard'),
  attributeGroups: [
    '$ANGULAR_INPUT',
    '$ANGULAR_OUTPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$DEFAULT'
  ],
  attributeSort: 'ASC',
  bracketSameLine: false,
  importOrder: [
    '^@angular/(.*)$',
    '^@ionic/(.*)$',
    '^@capacitor/(.*)$',
    '^@awesome-cordova-plugins/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '(.*)module(.*)',
    '(.*)service(.*)',
    '((.*)component(.*))|((.*)page(.*))',
    '((.*)apiModule(.*))|((.*)model(.*))',
    '(.*)actions(.*)',
    '(.*)effects(.*)',
    '(.*)selector(.*)',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  printWidth: 120,
  singleAttributePerLine: true,
  overrides: [{ files: '*.page.html', options: { parser: 'angular' } }]
}
