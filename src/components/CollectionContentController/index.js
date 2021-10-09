import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RoundedButton} from '../../atoms';
import {iconSort, iconList, iconTilled} from '../../assets';
const CollectionContentController = () => {
  const [isListed, setIsListed] = useState(true);
  return (
    <View style={styles.collectionControllerContainer}>
      <View style={styles.profilePhotoSection}>
        <RoundedButton icon={iconSort} />
        <Text style={styles.textController}>Baru Diputar</Text>
      </View>
      <View style={styles.buttonSection}>
        <View style={styles.likeButton}>
          <RoundedButton
            icon={isListed ? iconTilled : iconList}
            onPress={() => setIsListed(isListed ? false : true)}
          />
        </View>
      </View>
    </View>
  );
};

export default CollectionContentController;

const styles = StyleSheet.create({
  collectionControllerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    marginVertical: 10,
  },
  textController: {marginLeft: 10, color: 'white'},
  profilePhotoSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // neuButton: {
  //   borderColor: 'rgba(34, 37, 41, 0.7)',
  //   borderWidth: 1,
  //   shadowOpacity: 0.5, // <- and this or yours opacity
  //   shadowRadius: 3,
  //   borderRadius: 25,
  //   backgroundColor: '#272a2e',
  //   width: 45,
  //   height: 45,
  //   marginLeft: 10,
  //   padding: 1,
  // },
  cover: {
    width: '50%',
    height: '50%',
    borderRadius: 25,
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  likeButton: {
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
