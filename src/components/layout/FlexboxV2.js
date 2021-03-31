import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado'
export default () => {
  return (
    <View style={styles.flexV2}>
      <Quadrado cor="#ff801a"/>
      <Quadrado cor="#50d1f6"/>
      <Quadrado />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </View>
  )
}

const styles = StyleSheet.create({
  flexV2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd22c1'
  }
})