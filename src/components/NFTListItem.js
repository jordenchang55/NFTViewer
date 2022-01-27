import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NFTListItem = ({nft}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: nft.imageUrl}} />
      <Text style={styles.title}>{nft.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    marginTop: 3,
    fontWeight: '600',
    fontSize: 16,
    color: '#0f0f0f',
  },
});

export default NFTListItem;
