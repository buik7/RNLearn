import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Like from '../img/emoji/like.png';
import Love from '../img/emoji/love.png';
import Haha from '../img/emoji/haha.png';
import Care from '../img/emoji/care.png';
import Sad from '../img/emoji/sad.png';
import Angry from '../img/emoji/angry.png';

const imgList = [Like, Love, Haha, Care, Sad, Angry];

class BaiTap4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: imgList[0],
    };
  }

  renderImgList = () => {
    return imgList.map((img, index) => (
      <TouchableOpacity key={index} onPress={() => this.setState({img})}>
        <Image source={img} style={styles.subImg} />
      </TouchableOpacity>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.mb20]}>
          Bạn đang cảm thấy như thế nào?
        </Text>
        <Image source={this.state.img} style={[styles.mainImg, styles.mb20]} />
        <View style={styles.subImgList}>{this.renderImgList()}</View>
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
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
  mainImg: {
    height: 200,
    width: 200,
  },
  subImgList: {
    flexDirection: 'row',
  },
  subImg: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  mb20: {
    marginBottom: 20,
  },
});

export default BaiTap4;
