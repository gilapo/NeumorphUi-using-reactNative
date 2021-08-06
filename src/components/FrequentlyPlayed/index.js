import React, {useState} from 'react';
import {StyleSheet, Pressable, Image, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const FrequentlyPlayed = ({title, image}) => {
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
        style={styles.neuButton}>
        <Image source={image} style={styles.cover} />
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
