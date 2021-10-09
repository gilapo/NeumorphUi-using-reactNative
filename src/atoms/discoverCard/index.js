import React, {useState} from 'react';
import {StyleSheet, Pressable, Image, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const DiscoverCard = ({title, image, backgroundColor}) => {
  const [innerValue, setinnerValue] = useState(false);
  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setinnerValue(true)}
      onPressOut={() => setinnerValue(false)}>
      <Neomorph
        inner={innerValue}
        swapShadows={innerValue}
        darkShadowColor="#000000" // <- set this
        lightShadowColor="#3d3d3d" // <- this
        style={styles.neuCard}>
        <View style={styles.neuButtonColor(backgroundColor)}>
          <View style={styles.viewText}>
            <Text style={styles.genre}>{title}</Text>
          </View>
          <View style={styles.cardImage}>
            <Image source={image} style={styles.cover} />
          </View>
        </View>
      </Neomorph>
    </Pressable>
  );
};

export default DiscoverCard;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 10,
  },
  neuCard: {
    padding: 1,
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#272a2e',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 100,
  },
  neuButtonColor: color => {
    return {
      borderRadius: 8,
      paddingLeft: 10,
      paddingTop: 10,
      backgroundColor: color,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      overflow: 'hidden',
    };
  },
  genre: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: 100,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardImage: {
    display: 'flex',
    height: 70,
    width: 70,
    alignSelf: 'flex-end',
    position: 'relative',
    right: -12,
    transform: [{rotate: '25deg'}],
  },
  cover: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: '100%',
    width: '100%',
  },
});
