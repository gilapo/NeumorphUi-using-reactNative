import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/constants';
import {SearchBar} from '../../components';

const Search = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SearchBar onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  page: {display: 'flex', flex: 1, backgroundColor: colors.primaryColor},
});
