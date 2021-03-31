import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';

export default () => {
  return(
    <SafeAreaView style={styles.App}>
      <View>
        <Text style={styles.Title}>Teste de covid</Text>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>Insira seu nome: </Text>
        <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>Número do seu cartão: </Text>
        <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>Ano e mês de vencimento: </Text>
        <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>CVV: </Text>
        <TextInput style={styles.Input}></TextInput>
      </View>
      <View style={styles.View}>
        <Text style={styles.Text}>CPF: </Text>
        <TextInput style={styles.Input}></TextInput>
      </View>

      <View style={styles.Button}>
        <Button
          title="Fazer teste"
          onPress={() => Alert.alert('Positivo! Você está com covid')}
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 20,
  },
  Title: {
    fontSize: 40,
    marginBottom : 50,
  },
  Text: {
    display: 'flex',
    textAlign: 'left',
    fontSize: 18,
    color: 'white'
  },
  View: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
  },
  Input: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Button: {
    marginTop: 50,
  }
});