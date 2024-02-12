// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// import { loadModule } from 'hunspell-asm';


// const More = () => {

   
// const initializeHunspell = async () => {
//   try {
//     const hunspellFactory = await loadModule();
//     // Save the factory for later use
//     return hunspellFactory;
//   } catch (error) {
//     console.error('Error initializing Hunspell:', error);
//     // Handle initialization error
//   }
// };

// const hunspellFactoryPromise = initializeHunspell();


// // const mountDictionaries = async (hunspellFactory) => {
// //     try {
// //       const wasm = await hunspellFactory;
      
// //       // Load dictionary files
// //       const affBuffer = await fetch('../../assets/dictionaries/en_US.aff').then((res) => res.arrayBuffer());
// //       const dicBuffer = await fetch('../../assets/dictionaries/en_US.dic').then((res) => res.arrayBuffer());
  
// //       wasm.mountBuffer(new Uint8Array(affBuffer), 'en_US.aff');
// //       wasm.mountBuffer(new Uint8Array(dicBuffer), 'en_US.dic');
  
// //       // Return the mounted files
// //       return wasm;
// //     } catch (error) {
// //       console.error('Error mounting dictionaries:', error);
// //       // Handle dictionary mounting error
// //     }
// //   };
  
// //   const hunspellInstancePromise = hunspellFactoryPromise.then((factory) => mountDictionaries(factory));

// //   const checkSpelling = async () => {
// //     try {
// //       const hunspell = await hunspellInstancePromise;
      
// //       const isCorrect = await hunspell.spell('hello');
// //       const suggestions = await hunspell.suggest('mispelled');
      
// //       console.log('Is Correct:', isCorrect);
// //       console.log('Suggestions:', suggestions);
// //     } catch (error) {
// //       console.error('Error checking spelling:', error);
// //       // Handle spellchecking error
// //     }
// //   };
  
// //   checkSpelling();


//   return (
//     <View>
//       <Text>More</Text>
//     </View>
//   )
// }

// export default More

// const styles = StyleSheet.create({})