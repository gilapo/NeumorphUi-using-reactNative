import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {RoundedButton} from '../../atoms';
import {Neomorph} from 'react-native-neomorph-shadows';
import {iconSearch, defaultImage, iconAdd} from '../../assets';
const CollectionHeader = () => {
  const [inner, setInner] = useState(false);
  return (
    <View style={styles.collectionHeaderContainer}>
      <View style={styles.profilePhotoSection}>
        <Pressable
          onPressIn={() => setInner(true)}
          onPressOut={() => setInner(false)}
          style={styles.container}>
          <Neomorph
            inner={inner}
            swapShadows={inner}
            darkShadowColor="#000000" // <- set this
            lightShadowColor="#353C45" // <- this
            style={styles.neuButton}>
            <Image source={defaultImage} style={styles.cover} />
          </Neomorph>
        </Pressable>

        <View style={styles.titleSection}>
          <Text style={styles.title}>Koleksi Kamu</Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.searchButton}>
          <RoundedButton icon={iconSearch} />
        </View>
        <View>
          <RoundedButton icon={iconAdd} />
        </View>
      </View>
    </View>
  );
};

export default CollectionHeader;

const styles = StyleSheet.create({
  collectionHeaderContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePhotoSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  neuButton: {
    borderColor: 'rgba(34, 37, 41, 0.7)',
    borderWidth: 1,
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 3,
    borderRadius: 25,
    backgroundColor: '#272a2e',
    width: 45,
    height: 45,
    marginLeft: 10,
    padding: 1,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  searchButton: {
    marginRight: 15,
  },
  titleSection: {
    display: 'flex',
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  device: {
    color: '#828181',
    fontSize: 12,
  },
});
