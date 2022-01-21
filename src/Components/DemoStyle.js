import React, {Component} from 'react';
import {Text, View} from 'react-native';

class DemoStyle extends Component {
  render() {
    return (
      <View>
        <Text>Demo how to use style....</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: '#bbf',
              width: '30%',
              height: 20,
              marginVertical: 10,
              borderWidth: 2,
              borderStyle: 'dotted',
            }}></View>
          <View
            style={{
              backgroundColor: '#bba',
              width: '30%',
              height: 20,
            }}></View>
          <View
            style={{
              backgroundColor: '#bbc',
              width: '30%',
              height: 20,
            }}></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 100,
          }}>
          <View
            style={{
              backgroundColor: '#bbf',
              width: 20,
              height: 20,
              alignSelf: 'center',
            }}></View>
          <View
            style={{
              backgroundColor: '#bba',
              width: 20,
              height: 20,
            }}></View>
          <View
            style={{
              backgroundColor: '#bbc',
              width: 20,
              height: 20,
            }}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'red', flex: 1}}></View>
          <View style={{backgroundColor: 'yellow', flex: 2}}></View>
          <View style={{backgroundColor: 'green', flex: 1}}></View>
        </View>
      </View>
    );
  }
}

export default DemoStyle;
