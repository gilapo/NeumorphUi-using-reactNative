import React, {useState} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const Badges = ({text, length, onPress}) => {
  const [inner, setInner] = useState(false);

  return (
    <Pressable
      onPressIn={() => setInner(true)}
      onPressOut={() => setInner(false)}
      onPress={onPress}
      style={styles.container}>
      <Neomorph
        inner={inner}
        swapShadows={inner}
        darkShadowColor="#000000"
        lightShadowColor="#353C45"
        style={styles.neuButton(length)}>
        <Text style={styles.btntext}>{text}</Text>
      </Neomorph>
    </Pressable>
  );
};

export default Badges;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  neuButton: width => {
    return {
      borderColor: '#ffffff',
      borderWidth: 0.3,
      shadowOpacity: 0.5, // <- and this or yours opacity
      shadowRadius: 5,
      borderRadius: 25,
      backgroundColor: '#272a2e',
      width: width,
      height: 30,
      padding: 3,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  btntext: {
    color: '#ffffff',
    fontSize: 12,
  },
  iconBtn: {
    width: '100%',
    height: '100%',
  },
});
