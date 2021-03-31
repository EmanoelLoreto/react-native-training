import React from 'react';
import { Text } from 'react-native';

export default (props) => {
    return (
      <>
        <Text>O resultado é:</Text>
        {props.num % 2 === 0
          ? <Text>Par</Text>
          : <Text>Ímpar</Text>
        }
      </>
    )
}