import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const greeting = <Text>Hello there!</Text>
  const name = "Bhavya";
  return (
    
  <View>
    <Text style={styles.textStyle}>
      This is the components screen
    </Text>
    <Text style={styles.nameStyle}>
      My name is {name}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  nameStyle: {
    fontSize: 45
  }
})

export default ComponentsScreen;