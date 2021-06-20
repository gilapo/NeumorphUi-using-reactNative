import {auto} from 'async';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Alert,
  Pressable,
} from 'react-native';
import {Shadow, Neomorph, NeomorphBlur} from 'react-native-neomorph-shadows';
export default class NeuPrototype extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inner: false,
    };
  }

  neuClickState() {
    this.setState({
      inner: true,
    });
  }
  neuClickStateOut() {
    this.setState({
      inner: false,
    });
  }
  render() {
    const {inner} = this.state;
    return (
      <View style={styles.container}>
        <Pressable
          onPressIn={() => {
            this.neuClickState();
          }}
          onPressOut={() => {
            this.neuClickStateOut();
          }}>
          <Neomorph
            inner={inner}
            darkShadowColor="#bebebe" // <- set this
            lightShadowColor="#fffdfa"
            style={styles.neomorphButton}>
            <View style={styles.viewText}>
              <Text style={styles.buttonText}>Click me!</Text>
            </View>
          </Neomorph>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  neomorphButton: {
    shadowOpacity: 36, // <- and this or yours opacity
    shadowRadius: 10,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    width: 200,
    height: 200,
  },
  viewText: {
    height: 150,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'goldenrod',
  },
});
