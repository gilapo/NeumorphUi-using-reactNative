import {from} from 'form-data';
import React from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';
import {IconHistory, IconHome, IconSearch, IconCollection} from '../../assets';
import {Neomorph} from 'react-native-neomorph-shadows';
const TabItem = ({isFocused, label, onLongPress, onPress}) => {
  const icon = () => {
    if (label === 'Home') {
      return IconHome;
    }
    if (label === 'Search') {
      return IconSearch;
    }
    if (label === 'Collection') {
      return IconCollection;
    }
  };
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Neomorph
        inner={isFocused ? true : false}
        swapShadows={isFocused ? true : false}
        darkShadowColor="#000000" // <- set this
        lightShadowColor="#434950" // <- this
        style={styles.neuButton}>
        <Image source={icon()} style={styles.iconBtn} />
      </Neomorph>
      <Text style={isFocused ? styles.btntextFocus : styles.btntext}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  neuButton: {
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 5,
    borderRadius: 50,
    backgroundColor: '#34393E',
    width: 40,
    height: 40,
    padding: 10,
  },
  btntext: {
    color: '#919191',
    marginTop: 3,
  },
  btntextFocus: {
    marginTop: 3,
    color: 'white',
  },
  iconBtn: {
    width: '100%',
    height: '100%',
  },
});
