import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Produtos from './Produtos';

export default () => {
  // function listar() {
  //   Produtos.map(p => {
  //     return <Text key={p.id}>{p.id} - {p.nome} - R$ {p.preco}</Text>;
  //   })
  // };

  return (
    <>
      <Text style={styles.title}>Lista de produtos:</Text>
      <View>
        {Produtos.map(p => {
          return <Text
            style={styles.text}
            key={p.id}
          >
            {p.id} - {p.nome} - R$ {p.preco}
          </Text>;
        })}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  list: {
    justifyContent: 'flex-end'
  }
})