import React from 'react';
import { Text } from 'react-native';
import Estilo from './Estilos';

// Export default pode importar ele em outra tela por qualquer nome, sera importado como padrão
export default function () {
  return <Text style={Estilo.Texts}>Componente Padrão.</Text>
}

// Export function deve ser importado em outra tela pelo nome dado à funcão
export function Componente1 () {
  return <Text style={Estilo.Texts}>Componente #01.</Text>
}

// Export function deve ser importado em outra tela pelo nome dado à funcão
export function Componente2 () {
  return <Text style={Estilo.Texts}>Componente #02.</Text>
}
