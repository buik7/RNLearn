import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import Alto_icon from '../img/game/Alto_icon.png';
import Alto_0 from '../img/game/Alto_0.png';

const BaiTap3 = () => {
  const game = {
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    age: '9+',
    banner: Alto_0,
    backgroundColor: '#824671CC',
  };

  return (
    <View style={styles.container}>
      <Image source={game.banner} />
      <View
        style={[styles.infoContent, {backgroundColor: game.backgroundColor}]}>
        <Image source={game.icon} style={styles.gameIcon} />
        <View style={styles.info}>
          <Text style={styles.textBold}>{game.title}</Text>
          <Text>{game.subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContent: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  gameIcon: {
    width: 80,
    height: 80,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 8,
  },
  info: {
    width: '70%',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default BaiTap3;
