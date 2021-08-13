import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SectionList} from 'react-native';
import {DiscoverTopGenre, BrowseAll} from '../../components';
import {DiscoverSearch} from '../../atoms';

const Discover = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.heading}>
          <Text style={styles.headingDividerText}>Cari</Text>
        </View>
        <View style={styles.componentSection}>
          <View style={styles.searchSection}>
            <DiscoverSearch onPress={() => navigation.navigate('Search')} />
          </View>
        </View>
        <Text style={styles.dividerText}>Genre Teratas Kamu</Text>
        <View style={styles.componentSection}>
          <DiscoverTopGenre />
        </View>
        <Text style={styles.dividerText}>Browse Semua</Text>
        <View style={styles.componentSection}>
          <BrowseAll />
        </View>
      </View>
    </ScrollView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#272a2e',
    //padding: 10,
  },
  heading: {
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headingDividerText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  dividerText: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  componentSection: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  searchSection: {
    flex: 1,
    padding: 10,
  },
  searchSectionScrolled: {flex: 1, padding: 10, position: 'absolute', top: 0},
});
