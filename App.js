import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import removeCode from './removeCode.macro';

import logWithTimestamp from './logMacro.macro';




// removeCode`
//   console.log('sdg');
// `;


const App = () => {

  useEffect(() => {
    // Use the macro to generate a log statement with a timestamp
    logWithTimestamp(`
    console.log('Dynamically injected code executed during compilation!');
  `);
  }, []);
  return (
    <View>
      <Text>app</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})