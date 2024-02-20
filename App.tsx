import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

//import * as Hunspell from 'hunspell-asm';



import { loadModule, Hunspell } from 'hunspell-asm';

const App = () => {


  useEffect(() => {
    const ch = async () => {
      try {
        const wasm = await loadModule();
        const hunspell: Hunspell = wasm.create('assets/dictionaries/en_US.aff','assets/dictionaries/en_US.aff');

        const isCorrect = await hunspell.spell('hello');
        const suggestions = await hunspell.suggest('mispelled');
        console.log('Is Correct:', isCorrect);
        console.log('Suggestions:', suggestions);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    ch();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})