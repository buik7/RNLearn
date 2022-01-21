import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class BaiTap2 extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.bodyTop}>
          <View style={styles.bodyTopElement}></View>
          <View style={styles.bodyTopElement}></View>
        </View>
        <View style={styles.bodyBottom}>
          <View style={styles.bodyBottomElement}></View>
          <View style={styles.bodyBottomElement}></View>
          <View style={styles.bodyBottomElement}></View>
          <View style={styles.bodyBottomElement}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  bodyTop: {
    flex: 1,
    padding: 20,
    backgroundColor: '#96cc96',
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bodyTopElement: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#ffffbb',
    borderRadius: 20,
  },
  bodyBottom: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c9c9ff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  bodyBottomElement: {
    width: '40%',
    height: '40%',
    margin: '5%',
    backgroundColor: '#3d85c6',
    borderRadius: 20,
  },
});

export default BaiTap2;
