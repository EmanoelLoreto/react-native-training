import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Estilo from './Estilos';

export default (props) => {
  const [numero, setNumero] = useState(props.inicial);

  const inc = () => setNumero(numero + 1);
  const dec = () => setNumero(numero - 1);
  return(
    <>
      <Text style={Estilo.Texts}>{numero}</Text>
      <View style={Styles.ViewButtons}>
        <View style={Styles.Button}>
          <Button
            title="+"
            onPress={inc}
          />
        </View>
        <Button
          title="-"
          onPress={dec}
        />
      </View>
    </>
  )
}

const Styles = StyleSheet.create({
  ViewButtons: {
    width: 150,
    marginTop: 25,
  },
  Button: {
    marginBottom: 15,
  }
})