import React from 'react';
import {StyleSheet, Pressable, Image, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {defaultImage} from '../../assets/Images';

const FrequentlyPlayed = ({active, title, onPress}) => {
  console.log(active);
  return (
    <Pressable style={styles.container} onPress={onPress} active={active}>
      <Neomorph
        inner={active ? true : false}
        swapShadows={active ? true : false}
        darkShadowColor="#000000" // <- set this
        lightShadowColor="#3d3d3d" // <- this
        style={styles.neuButton}>
        <Image source={defaultImage} style={styles.cover} />
        <View style={styles.viewText}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Neomorph>
    </Pressable>
  );
};

export default FrequentlyPlayed;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  neuButton: {
    flexDirection: 'row',
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#2b2b2b',
    width: 180,
    height: 60,
    marginBottom: 10,
  },
  cover: {
    width: '30%',
    height: '100%',
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  viewText: {
    width: '70%',
    height: 60,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'white',
  },
});
