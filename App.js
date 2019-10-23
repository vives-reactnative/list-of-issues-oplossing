import React from 'react';
import { StyleSheet, View } from 'react-native';
import List from './src/components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch'
  }
});
