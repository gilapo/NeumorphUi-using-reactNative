import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CollectionHeader} from '../../components';
import {Badges} from '../../atoms';
import {colors} from '../../utils/constants';
import {badgesData, collections} from '../../adapters';
import {CollectionContent, CollectionContentController} from '../../components';

const BadgesButton = () => {
  return badgesData.map(data => (
    <Badges key={data.key} length={data.length} text={data.name} />
  ));
};
const CollectionContentButton = () => {
  return collections.map(data => (
    <CollectionContent
      key={data.key}
      image={data.image}
      title={data.title}
      category={data.category}
    />
  ));
};

const Collection = () => {
  return (
    <View style={styles.collectionContainer}>
      <View style={styles.headerSection}>
        <View style={styles.collectionHeading}>
          <CollectionHeader />
        </View>
        <View style={styles.badges}>
          <BadgesButton />
        </View>
      </View>
      <ScrollView
        style={styles.contentSection}
        showsVerticalScrollIndicator={false}>
        <View>
          <CollectionContentController />
        </View>
        <CollectionContentButton />
      </ScrollView>
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  headerSection: {
    display: 'flex',
    borderBottomColor: colors.darkShadowColor,
    borderBottomWidth: 1,
    height: 110,
    justifyContent: 'space-between',
  },
  collectionHeading: {
    width: '100%',
    height: '60%',
    justifyContent: 'space-between',
  },
  badges: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '40%',
  },
  contentSection: {
    flex: 1,
  },
});
