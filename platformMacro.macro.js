const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(({ references, state, babel }) => {
  references.default.forEach(referencePath => {
    const parentNode = referencePath.parentPath;

    if (parentNode.isCallExpression() && parentNode.get('callee').matchesPattern('Platform.select')) {
      // Replace Platform.select with the selected platform code
      const platformConfig = parentNode.get('arguments')[0].properties;
      const selectedPlatformCode = platformConfig.find(prop => prop.key.value === 'ios').value;
      parentNode.replaceWith(selectedPlatformCode);
    }
  });
});