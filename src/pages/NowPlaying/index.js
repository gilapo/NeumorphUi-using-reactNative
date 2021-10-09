import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {iconBack, iconPlay, iconPause} from '../../assets';
import {RoundedButton} from '../../atoms';
import {colors} from '../../utils/constants';
import {Neomorph} from 'react-native-neomorph-shadows';
import {podcastData} from '../../adapters';
import Slider from '@react-native-community/slider';

const NowPlaying = ({navigation}) => {
  return (
    <View style={styles.nowPlayingContainer}>
      <View style={styles.nowPlayingController}>
        <RoundedButton icon={iconBack} onPress={() => navigation.goBack()} />
        <Text style={styles.controllerText}>Daily Mix 1</Text>
        <RoundedButton />
      </View>
      <View style={styles.nowPlayingContent}>
        <Neomorph
          darkShadowColor="#000000" // <- set this
          lightShadowColor="#3d3d3d" // <- this
          style={styles.neuButton}>
          <Image source={podcastData[2].image} style={styles.cover} />
        </Neomorph>
        <View style={styles.contentText}>
          <Text style={styles.titleText}>Anganku Anganmu</Text>
          <Text style={styles.artistText}>Isyana & Raisa </Text>
        </View>
        <Slider
          style={styles.sliderContent}
          minimumValue={-1}
          maximumValue={2}
          minimumTrackTintColor={colors.secondaryColor}
          maximumTrackTintColor="#000000"
        />
      </View>
      <View style={styles.nowPlayingButton}>
        <RoundedButton />
        <RoundedButton />
        <RoundedButton icon={iconPlay} width={70} />
        <RoundedButton />
        <RoundedButton />
      </View>
    </View>
  );
};

export default NowPlaying;

const styles = StyleSheet.create({
  nowPlayingContainer: {
    padding: 20,
    backgroundColor: colors.primaryColor,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  nowPlayingController: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controllerText: {
    color: '#ffffff',
  },
  nowPlayingContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  neuButton: {
    shadowOpacity: 0.9, // <- and this or yours opacity
    shadowRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#272a2e',
    width: 300,
    height: 300,
    marginRight: 10,
    padding: 2,
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  contentText: {
    // borderWidth: 1,
    // borderColor: 'red',
    padding: 5,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  artistText: {
    color: '#ffffff',
    marginTop: 5,
    fontSize: 14,
  },
  nowPlayingButton: {
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 20,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sliderContent: {
    width: 325,
    height: 40,
  },
});
