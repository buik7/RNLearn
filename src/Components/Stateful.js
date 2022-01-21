import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Stateful extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '900'}}>
          Welcome to React Native
        </Text>
        <Text>Jan 14th, 2022</Text>
      </View>
    );
  }
}

export default Stateful;
