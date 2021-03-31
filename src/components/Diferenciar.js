import React from 'react';
import { Text, Platform } from 'react-native';

export default () => {
  if (Platform.OS === 'android') {
    return <Text>Android</Text>
  } else if (Platform.OS === 'ios') {
    return <Text>Iphone</Text>
  } else {
    return <Text>{Platform.OS}</Text>
  }
}