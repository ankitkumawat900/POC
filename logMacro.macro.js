
const { createMacro } = require('babel-plugin-macros');

module.exports = createMacro(({ references, state, babel }) => {
    references.default.forEach(referencePath => {
      const parentNode = referencePath.parentPath;
  
    //   if (parentNode.isCallExpression() && parentNode.get('callee').isIdentifier({ name: 'logWithTimestamp' })) {
    //     // Replace logWithTimestamp with a console.log statement with a timestamp
    //     const logArguments = parentNode.get('arguments');

    //     console.log(logArguments);
    //     // logArguments.unshift(babel.types.stringLiteral(`[${new Date().toISOString()}]`));
    //     parentNode.replaceWithMultiple(logArguments
    //     );
    //   }
  // Check if the macro is used as a function call
  if (parentNode.isCallExpression() && parentNode.get('callee').isIdentifier({ name: 'logWithTimestamp' })) {
    const codeBlock = parentNode.get('arguments')[0];

    console.log("code block",codeBlock);
      // Check an environment variable or a custom flag to determine if the code should be included
      const shouldIncludeCode = process.env.INCLUDE_CODE === 'true';

      if (true) {
        // Include the code block in the bundle
        console.log('fghfh');
        
        //parentNode.replaceWithMultiple(codeBlock.node.body);
      } else {
        // Replace conditionalCode with an empty block if code should not be included
        parentNode.replaceWith(babel.types.blockStatement([]));
      }
  }
    });
  });