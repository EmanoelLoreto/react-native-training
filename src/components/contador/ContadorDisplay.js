import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilo from '../Estilos';

export default (props) => {
  return (
    <View style={style.Display}>
      <Text style={Estilo.Texts}>{props.num}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  Display: {
    display: 'flex',
    textAlign: 'center',
    width: 80,
  }
})