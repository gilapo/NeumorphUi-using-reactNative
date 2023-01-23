import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {RoundedButton} from '../../atoms';
import {Neomorph} from 'react-native-neomorph-shadows';
import {podcastData} from '../../adapters';
import {iconPlay, iconLike, iconLikeActive, iconPause} from '../../assets';
const NowPlayingTabItem = () => {
  const [isPlayed, setIsPlayed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.nowPlayingContainer}>
      <View style={styles.songSection}>
        <Neomorph
          darkShadowColor="#000000" // <- set this
          lightShadowColor="#353C45" // <- this
          style={styles.neuButton}>
          <Image source={podcastData[2].image} style={styles.cover} />
        </Neomorph>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{`${podcastData[2].name}`}</Text>
          <Text style={styles.device}>{`${podcastData[2].artist}`}</Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <View
          style={styles.likeButton}
          onTouchEnd={() => (isLiked ? setIsLiked(false) : setIsLiked(true))}>
          <RoundedButton icon={isLiked ? iconLikeActive : iconLike} />
        </View>
        <View
          style={styles.playButton}
          onTouchEnd={() =>
            isPlayed ? setIsPlayed(false) : setIsPlayed(true)
          }>
          <RoundedButton icon={isPlayed ? iconPlay : iconPause} />
        </View>
      </View>
    </View>
  );
};

export default NowPlayingTabItem;

const styles = StyleSheet.create({
  nowPlayingContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  songSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  neuButton: {
    borderColor: 'rgba(34, 37, 41, 0.7)',
    borderWidth: 1,
    shadowOpacity: 0.5, // <- and this or yours opacity
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: '#272a2e',
    width: 50,
    height: 50,
    marginLeft: 10,
    padding: 1,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
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
    fontSize: 14,
    fontWeight: '100',
  },
  device: {
    color: '#828181',
    fontSize: 12,
  },
});
