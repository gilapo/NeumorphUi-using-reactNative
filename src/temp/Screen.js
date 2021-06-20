import {auto} from 'async';
import {red} from 'jest-matcher-utils/node_modules/chalk';
import React, {Component} from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
import History from './icons/History.png';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inner: false,
      swapShadows: false,
    };
  }

  btnAnimationClick() {
    this.setState({
      inner: true,
      swapShadows: 'true',
    });
  }
  btnAnimationClickOut() {
    this.setState({
      inner: false,
      swapShadows: 'false',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.greeting}> Selamat Siang </Text>
          <Pressable
            onPressIn={() => {
              this.btnAnimationClick();
            }}
            onPress={() => {
              this.btnAnimationClickOut();
            }}>
            <Neomorph
              inner={this.state.inner}
              swapShadows={this.state.swapShadows}
              darkShadowColor="#000000" // <- set this
              lightShadowColor="#434950" // <- this
              style={styles.btnHistory}>
              <Image source={History} style={styles.btnHistoryIcon} />
            </Neomorph>
          </Pressable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
    backgroundColor: '#34393E',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  heading: {
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  greeting: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnHistory: {
    shadowOpacity: 0.5, // <- and this or yours opacity
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#34393E',
    shadowRadius: 5,
    borderRadius: 100,
    backgroundColor: '#34393E',
    width: 40,
    height: 40,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnHistoryIcon: {
    width: '100%',
    height: '100%',
  },
});
