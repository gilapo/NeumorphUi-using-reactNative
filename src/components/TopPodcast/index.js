import React from 'react';
import {StyleSheet, Pressable, Image, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {defaultImage} from '../../assets/Images';

const FrequentlyPlayed = ({isFocused, title, active, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Neomorph
        darkShadowColor="#000000" // <- set this
        lightShadowColor="#3d3d3d" // <- this
        style={styles.neuButton}>
        <Image source={defaultImage} style={styles.cover} />
      </Neomorph>
    </Pressable>
  );
};

export default FrequentlyPlayed;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  neuButton: {
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#2b2b2b',
    width: 150,
    height: 180,
    marginRight: 10,
  },
  cover: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
});
