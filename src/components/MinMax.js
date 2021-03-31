import React from 'react';
import { Text } from 'react-native';
import Estilo from './Estilos';

export default (props) => {
  console.warn(props)
  return (
    <Text style={Estilo.Texts}>Max: {props.max} Min: {props.min}</Text>
  );
}