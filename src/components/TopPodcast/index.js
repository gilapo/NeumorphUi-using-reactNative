import React, {useState} from 'react';
import {StyleSheet, Pressable, Image, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const TopPodcast = ({title, image, artist}) => {
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
        <View style={styles.viewText}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.artistText}>Acara - {artist} </Text>
        </View>
      </Neomorph>
    </Pressable>
  );
};

export default TopPodcast;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingLeft: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  neuButton: {
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 3,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#272a2e',
    width: 150,
    height: 200,
    marginRight: 10,
  },
  cover: {
    width: '100%',
    height: '70%',
    borderRadius: 8,
  },
  viewText: {
    padding: 5,
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  artistText: {
    color: '#ffffff',
    fontSize: 10,
  },
});
