import React, {Component} from 'react';
import {Image, View} from 'react-native';

// Khi ta lấy hình từ source external, ta phải thêm width & height
class DemoImage extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../img/ava.jpg')} />
        <Image
          source={{uri: 'https://picsum.photos/100/100'}}
          style={{width: 100, height: 100}}
        />
      </View>
    );
  }
}

export default DemoImage;
