import React from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';
import {
  IconHome,
  iconSearch,
  iconLibrary,
  iconHomeActive,
  iconLibraryActive,
  iconSearchActive,
} from '../../assets';
import {Neomorph} from 'react-native-neomorph-shadows';
const TabItem = ({isFocused, label, onLongPress, onPress}) => {
  const icon = () => {
    if (label === 'Home') {
      return IconHome;
    }
    if (label === 'Search') {
      return iconSearch;
    }
    if (label === 'Collection') {
      return iconLibrary;
    }
  };
  const iconFocus = () => {
    if (label === 'Home') {
      return iconHomeActive;
    }
    if (label === 'Search') {
      return iconSearchActive;
    }
    if (label === 'Collection') {
      return iconLibraryActive;
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
        darkShadowColor="#000000"
        lightShadowColor="#353C45"
        style={styles.neuButton}>
        <Image
          source={isFocused ? iconFocus() : icon()}
          style={styles.iconBtn}
        />
      </Neomorph>
      {/* <Text style={isFocused ? styles.btntextFocus : styles.btntext}>
        {label}
      </Text> */}
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
    borderColor: 'rgba(34, 37, 41, 0.7)',
    borderWidth: 1,
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 5,
    borderRadius: 25,
    backgroundColor: '#272a2e',
    width: 45,
    height: 45,
    padding: 15,
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
  },
});
