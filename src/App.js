import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';

// import Primeiro from './components/Primeiro';
// import ComponentePadrao, { Componente1, Componente2 } from './components/Multiplos';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import TesteCovid from './components/TesteCovid';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import Contadorv2 from './components/contador/Contadorv2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membros from './components/relacao/Membros';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default () => {
  return (
    <SafeAreaView style={styles.App}>
      {/* <Primeiro /> */}
      {/* <ComponentePadrao /> */}
      {/* <Componente1 /> */}
      {/* <Componente2 /> */}
      {/* <MinMax min={1} max={10}/> */}
      {/* <Aleatorio min={1} max={100} /> */}
      {/* <TesteCovid/> */}
      {/* <Botao/> */}
      {/* <Contador inicial={0}/> */}
      {/* <Pai /> */}
      {/* <Contadorv2 /> */}
      {/* <Diferenciar /> */}
      {/* <ParImpar num={2}/> */}
      {/* <Familia>
        <Membros nome="Emanoel" sobrenome="Loreto"/>
        <Membros nome="Loreto" sobrenome="Emanoel"/>
      </Familia> */}
      {/* <UsuarioLogado usuario={{ nome: 'Emanoel', email: 'emanoel.loreto@hotmail.com' }}/>
      <UsuarioLogado usuario={{ nome: 'Emanoel' }}/>
      <UsuarioLogado usuario={null}/> */}
      {/* <ListaProdutos /> */}
      {/* <ListaProdutosV2 /> */}
      {/* <DigiteSeuNome /> */}
      {/* <FlexboxV1 /> */}
      {/* <FlexboxV2 /> */}
      {/* <FlexboxV3 /> */}
      {/* <FlexboxV4 /> */}
      <Mega qtdNumeros={7} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 20,
  },
});