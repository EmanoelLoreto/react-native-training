import React from 'react';
import { View, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.flexV4}>
      <View style={styles.v1}/>
      <View style={styles.v2}/>
    </View>
  )
}

const styles = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: '100',
    backgroundColor: '#fff'
  },
  v1: {
    flexGrow: 1,
    width: '100',
    backgroundColor: '#dd22c1'
  },
  v2: {
    flexGrow: 1,
    width: '100',
    backgroundColor: '#50d1f6'
  },
})