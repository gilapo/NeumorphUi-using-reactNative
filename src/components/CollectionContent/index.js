import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {defaultImage} from '../../assets';
import {colors} from '../../utils/constants';
const CollectionContent = ({title, image, category, updateTime, isPlayed}) => {
  const [inner, setInner] = useState(false);
  return (
    <View style={styles.Content}>
      <View style={styles.categoriesCover}>
        <Pressable
          onPressIn={() => setInner(true)}
          onPressOut={() => setInner(false)}
          style={styles.container}>
          <Neomorph
            inner={inner}
            swapShadows={inner}
            darkShadowColor="#000000" // <- set this
            lightShadowColor="#353C45" // <- this
            style={
              category === 'Artist'
                ? styles.neuButton(35)
                : styles.neuButton(10)
            }>
            <Image
              source={image ? image : defaultImage}
              style={
                category === 'Artist' ? styles.cover(35) : styles.cover(10)
              }
            />
          </Neomorph>
        </Pressable>
        <View style={styles.titleSection}>
          <Text
            style={styles.title(
              isPlayed ? colors.secondaryColor : colors.textColorWhite,
            )}>
            {title}
          </Text>
          {category === 'Artist' ? null : (
            <Text style={styles.categories}>{category}</Text>
          )}
          {updateTime !== undefined ? (
            <Text style={styles.updateTime}>{updateTime}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default CollectionContent;

const styles = StyleSheet.create({
  Content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  categoriesCover: {
    display: 'flex',
    flexDirection: 'row',
  },
  neuButton: radius => {
    return {
      borderColor: 'rgba(34, 37, 41, 0.7)',
      borderWidth: 1,
      shadowOpacity: 0.5, // <- and this or yours opacity
      shadowRadius: 5,
      borderRadius: radius,
      backgroundColor: '#272a2e',
      width: 70,
      height: 70,
      marginLeft: 10,
      padding: 1,
    };
  },
  cover: radius => {
    return {
      width: '100%',
      height: '100%',
      borderRadius: radius,
    };
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
  title: color => {
    return {color: color, fontSize: 14, fontWeight: '100'};
  },
  categories: {
    color: '#ffffff',
    fontSize: 12,
  },
  updateTime: {
    color: '#ffffff',
    fontSize: 10,
  },
});
