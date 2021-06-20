import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {FrequentlyPlayed, TopPodcast} from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frequentlyPlayed: '0',
    };
  }

  clickHandler(value) {
    this.setState({
      frequentlyPlayed: value,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.heading}>
            <Text style={styles.dividerText}>Selamat Malam</Text>
          </View>
          <View style={styles.frequentlyPlayed}>
            <FrequentlyPlayed
              title="Where the Light is: John Mayer ..."
              onPress={() => this.clickHandler('1')}
              active={this.state.frequentlyPlayed === '1'}
            />
            <FrequentlyPlayed
              title="Where the Light is: John Mayer ..."
              onPress={() => this.clickHandler('2')}
              active={this.state.frequentlyPlayed === '2'}
            />
            <FrequentlyPlayed
              title="Where the Light is: John Mayer ..."
              onPress={() => this.clickHandler('3')}
              active={this.state.frequentlyPlayed === '3'}
            />
            <FrequentlyPlayed
              title="Where the Light is: John Mayer ..."
              onPress={() => this.clickHandler('4')}
              active={this.state.frequentlyPlayed === '4'}
            />
            <FrequentlyPlayed
              title="Where the Light is: John Mayer ..."
              onPress={() => this.clickHandler('5')}
              active={this.state.frequentlyPlayed === '5'}
            />
            <FrequentlyPlayed
              title="Where the Light is: John Mayer ..."
              onPress={() => this.clickHandler('6')}
              active={this.state.frequentlyPlayed === '6'}
            />
          </View>
          <Text style={styles.dividerText}>Acara Teratas Kamu</Text>
          <ScrollView horizontal style={styles.topPodcast}>
            <TopPodcast />
            <TopPodcast />
            <TopPodcast />
            <TopPodcast />
            <TopPodcast />
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#2b2b2b',
    padding: 10,
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
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  frequentlyPlayed: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  topPodcast: {
    flexDirection: 'row',
    borderColor: 'white',
  },
});
