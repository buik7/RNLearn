import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import React, {Component} from 'react';

// WE SHOULD ALWAYS USE ARROW FUNCTION IN THE CLASS

class DemoTouchable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  onPressButton = function () {
    console.log('Pressed ', this);
    // "this" here is from the function, not the class
    // Therefore, this = undefined
  };

  onPressButtonArrow = () => isOpacity => {
    console.log('Pressed ', this.isLogin); // "this" from the class
    console.log(isOpacity ? 'TouchableOpacity' : 'TouchableHighlight');
    this.setState({
      isLogin: false,
    });
  };

  signIn = () => this.setState({isLogin: true});
  signOut = () => this.setState({isLogin: false});

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLogin ? (
          <TouchableOpacity style={styles.btn} onPress={this.signOut}>
            <Text style={styles.btnText}>Log out</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.btn} onPress={this.signIn}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableHighlight style={styles.btn} onPress={this.signIn}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableHighlight>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5C6A5',
    borderRadius: 8,
    marginBottom: 10,
  },
  btnText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 17.5,
  },
  mb10: {
    marginBottom: 10,
  },
});

export default DemoTouchable;
