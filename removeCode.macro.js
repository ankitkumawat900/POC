const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(({ references, state, babel }) => {
   //const isDebug = true;
  references.default.forEach(referencePath => {
    const parentNode = referencePath.parentPath;
    console.log(parentNode);
   //parentNode.remove();
    
  });
});