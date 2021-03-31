import React, { Component } from 'react';
import { Button, Text, TextInput } from 'react-native';
import Estilo from '../Estilos';

export default class Mega extends Component {

  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  }

  alterarQtdNumero = (qtd) => {
    this.setState({ qtdNumeros: +qtd })
  }

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
  }

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b)
    this.setState({ numeros })
  }

  render() {
    return (
      <>
        <Text style={Estilo.Texts}>
          Gerador de Mega-Sena {this.state.qtdNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Qtd de numeros"
          value={`${this.state.qtdNumeros}`}
          onChange={this.alterarQtdNumero}
        />
        <Button
          title="Gerar numeros"
          onPress={this.gerarNumeros}
        />
        <Text>
          { this.state.numeros.join(',') }
        </Text>
      </>
    )
  }
}