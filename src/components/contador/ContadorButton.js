import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <View style={Styles.ViewButtons}>
      <Button
        title="+"
        onPress={props.inc}
      />
      <Button
        title="-"
        onPress={props.dec}
      />
    </View>
  )
}

const Styles = StyleSheet.create({
  ViewButtons: {
    width: 150,
    marginTop: 5,
  },
})