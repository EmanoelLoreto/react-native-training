import React, { useState } from 'react';
import { Text } from 'react-native';
import Estilo from '../Estilos';

import ContadorDisplay from './ContadorDisplay';
import ContadorButton from './ContadorButton';

export default () => {
  const [numero, setNumero] = useState(0);

  const inc = () => setNumero(numero + 1);
  const dec = () => setNumero(numero - 1);
  return (
    <>
      <Text style={Estilo.Texts}>Contador</Text>
      <ContadorDisplay num={numero}/>
      <ContadorButton inc={inc} dec={dec}/>
    </>
  )
}