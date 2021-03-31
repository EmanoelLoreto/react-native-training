import React from 'react';
import { Text } from 'react-native';
import Estilo from './Estilos';

export default (props) => {
  const randomNumber = Math.floor(Math.random() * (props.max - props.min) - props.min);
  return (
    <Text
      style={Estilo.Texts}
    >
      O número aleatório entre {props.min} e {props.max} é: {randomNumber}
    </Text>
  )
}