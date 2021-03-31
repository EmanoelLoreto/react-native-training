import React , {useState} from 'react';
import { Text } from 'react-native';
import Filho from './Filho'
export default () => {
  const [num, setNum] = useState(0);

  function exibeValor(numero) {
    setNum(numero);
  }

  return (
    <>
      <Text>{num}</Text>
      <Filho
        funcao={exibeValor}
        min={1}
        max={80}  
      />
    </>
  )
}