const createMacro = require("babel-plugin-macros").createMacro;

module.exports = createMacro(conditionalMacro);

function conditionalMacro({ references, state, babel }) {
  const { types: t } = babel;
  const { default: defaultImportReferences } = references;

  defaultImportReferences.forEach(referencePath => {
    const value = referencePath.parentPath.node.arguments[0].value;

    if (value === "PT") {
      // Transform code for "PT" condition
      referencePath.parentPath.replaceWithMultiple([
        t.expressionStatement(t.stringLiteral("This is code for PT")),
      ]);
    } else if (value === "ISN") {
      // Transform code for "ISN" condition
      referencePath.parentPath.replaceWithMultiple([
        t.expressionStatement(t.stringLiteral("This is code for ISN")),
      ]);
    }
  });
}