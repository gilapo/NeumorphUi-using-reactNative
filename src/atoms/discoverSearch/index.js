import React from 'react';
import {StyleSheet, Text, Image, Pressable} from 'react-native';
import {iconSearchBlack} from '../../assets';

const DiscoverSearch = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.searchButtonNavigator}>
      <Image source={iconSearchBlack} style={styles.searchButton} />
      <Text style={styles.searchPlaceholder}>Artis, Lagu, atau Podcast</Text>
    </Pressable>
  );
};

export default DiscoverSearch;

const styles = StyleSheet.create({
  searchButtonNavigator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: '100%',
    height: 50,
    padding: 10,
  },
  searchButton: {
    marginHorizontal: 10,
  },
  searchPlaceholder: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'rgba(51, 51, 45, 0.69)',
  },
});
