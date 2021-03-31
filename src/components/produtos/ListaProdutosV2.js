import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

import Produtos from './Produtos';

export default () => {
  const renderProdutos = ({ item: Produtos }) => {
    return <Text>
      {Produtos.id} - {Produtos.nome} - R$ {Produtos.preco}
    </Text>
  };

  return (
    <>
      <Text style={styles.title}>Lista de produtosV2:</Text>
      <View>
        <FlatList
          data={Produtos}
          keyExtractor={item => `${item.id}`}
          renderItem={renderProdutos}
          // renderItem={({ item: produto }) => {
          //   return <Text>
          //     {produto.id} - {produto.nome} - R$ {produto.preco}
          //   </Text>
          // }}
        />
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