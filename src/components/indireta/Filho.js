import React from 'react';
import { Button } from 'react-native';

export default (props) => {
  function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min) - min);
  }

  return (
    <Button
      title="Executar"
      onPress={function() {
        const numero = gerarNumero(props.min, props.max);
        props.funcao(numero);
      }}
    />
  )
}