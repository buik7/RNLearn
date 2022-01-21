import {Text, View, StyleSheet, Button} from 'react-native';
import React, {Component} from 'react';

/**
 * - Không sử dụng <Button> vì inconsistency giữa Andriod và IOS
 * - Phần setState có thể xem trong src/Components/DemoTouchable
 */

class BindingData extends Component {
  textRender = 'Hello React Native';
  textLogin = 'Login into RN';
  isLogin = false;

  renderLogin = () => {
    if (this.isLogin) {
      return <Text style={styles.txt}>{this.textRender}</Text>;
    }
    return <Text style={styles.txt}>{this.textLogin}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Binding Data Component</Text>
        {this.renderLogin()}
        <Text style={styles.txt}>
          {this.isLogin ? this.textRender : this.textLogin}
        </Text>
        <Button title="Login" color="red" />
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
  txt: {
    fontSize: 24,
    fontWeight: '700',
  },
});

export default BindingData;
