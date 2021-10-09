import React, {useState} from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
const RoundedButton = ({icon, onPress, width = 45}) => {
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
        style={styles.neuButton(width)}>
        <Image source={icon} style={styles.iconBtn} />
      </Neomorph>
    </Pressable>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  neuButton: width => {
    return {
      borderColor: 'rgba(34, 37, 41, 0.7)',
      borderWidth: 1,
      shadowOpacity: 0.5, // <- and this or yours opacity
      shadowRadius: 5,
      borderRadius: width / 2,
      backgroundColor: '#272a2e',
      width: width,
      height: width,
      padding: '35%',
    };
  },
  btntext: {
    color: '#919191',
    marginTop: 3,
    fontSize: 12,
  },
  btntextFocus: {
    fontSize: 12,
    marginTop: 3,
    color: 'white',
  },
  iconBtn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
