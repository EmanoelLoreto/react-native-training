import React from 'react';
import { View, StyleSheet } from 'react-native';

import Quadrado from './Quadrado'
export default () => {
  return (
    <View style={styles.flexV3}>
      <Quadrado cor="#ff801a"/>
      <Quadrado cor="#50d1f6"/>
      <Quadrado />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </View>
  )
}

const styles = StyleSheet.create({
  flexV3: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 350,
    width: '100%',
    backgroundColor: '#dd22c1'
  }
})