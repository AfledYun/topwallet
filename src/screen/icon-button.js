import React from 'react';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';

export const IconButton = ({ source, onPress, style }) => (
    <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="#d0d0d0">
        <Image style={styles.image} source={source} />
    </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21
  },
  image: {
    width: 32,
    height: 32
  }
});
