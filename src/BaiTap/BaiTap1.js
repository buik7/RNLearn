import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class BaiTap1 extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={[styles.element, {backgroundColor: '#C9C9FF'}]}>
          <Text style={styles.elementText}>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.element, {backgroundColor: '#3D85C6'}]}>
          <Text style={styles.elementText}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.element, {backgroundColor: '#96CC96'}]}>
          <Text style={styles.elementText}>Green: #96CC96</Text>
        </View>
        <View style={[styles.element, {backgroundColor: '#F4B940'}]}>
          <Text style={styles.elementText}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
  },
  element: {
    flex: 1,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elementText: {
    fontSize: 20,
    fontWeight: '900',
  },
});

export default BaiTap1;
