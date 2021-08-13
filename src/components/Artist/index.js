import React, {useState} from 'react';
import {StyleSheet, Pressable, Image, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const Artist = ({image, artist}) => {
  const [inner, setInner] = useState(false);
  return (
    <Pressable
      onPressIn={() => setInner(true)}
      onPressOut={() => setInner(false)}
      style={styles.container}>
      <Neomorph
        inner={inner}
        swapShadows={inner}
        darkShadowColor="#000000" // <- set this
        lightShadowColor="#3d3d3d" // <- this
        style={styles.neuButton}>
        <Image source={image} style={styles.cover} />
      </Neomorph>
      <View style={styles.viewText}>
        <Text style={styles.artistText}>{artist}</Text>
      </View>
    </Pressable>
  );
};

export default Artist;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingLeft: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  neuButton: {
    shadowOpacity: 0.8, // <- and this or yours opacity
    shadowRadius: 3,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2b2b2b',
    borderRadius: 100,
    backgroundColor: '#272a2e',
    width: 150,
    height: 150,
    marginRight: 10,
    padding: 1,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  viewText: {
    padding: 5,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  artistText: {
    color: '#ffffff',
  },
});
