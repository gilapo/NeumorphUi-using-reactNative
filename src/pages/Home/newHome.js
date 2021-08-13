import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FrequentlyPlayed, TopPodcast, Artist} from '../../components';
import {defaultImage} from '../../assets/Images';
import {artistData, titlesData, podcastData} from '../../adapters';

const FrequentlyPlayedButton = () => {
  return titlesData.map(title => (
    <FrequentlyPlayed key={title.key} title={title.name} image={title.image} />
  ));
};

const TopPodcastButton = () => {
  return podcastData.map(podcastItem => (
    <TopPodcast
      key={podcastItem.key}
      title={podcastItem.name}
      artist={podcastItem.artist}
      image={podcastItem.image ? podcastItem.image : defaultImage}
    />
  ));
};

const ArtistButton = () => {
  return artistData.map(artistItem => (
    <Artist
      key={artistItem.key}
      artist={artistItem.artist}
      image={artistItem.image}
    />
  ));
};

const NewHome = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.heading}>
          <Text style={styles.dividerText}>Selamat Malam</Text>
        </View>
        <View style={styles.componentSection}>
          <FrequentlyPlayedButton />
        </View>
        <Text style={styles.dividerText}>Acara Teratas Kamu</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.topPodcast}>
          <View style={styles.componentSection}>
            <TopPodcastButton />
          </View>
        </ScrollView>
        <Text style={styles.dividerText}>Artis yang disarankan</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.artistSection}>
          <View style={styles.componentSection}>
            <ArtistButton />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default NewHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#272a2e',
    //padding: 10,
  },
  heading: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btns: {
    flexDirection: 'row',
  },
  dividerText: {
    marginBottom: 10,
    marginLeft: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  componentSection: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  topPodcast: {
    flexDirection: 'row',
    borderColor: 'white',
  },
  artistSection: {
    paddingLeft: 10,
  },
});
