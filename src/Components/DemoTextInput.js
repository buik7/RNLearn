import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class DemoTextInput extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          multiline={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});

export default DemoTextInput;
