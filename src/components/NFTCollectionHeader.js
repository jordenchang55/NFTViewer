import {Image, ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';

const NFTCollectionHeader = ({collection}) => {
  return (
    <>
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: collection.collectionDict.bannerImageUrl}}>
        <Image
          style={styles.avatar}
          source={{uri: collection.collectionDict.avatarImageUrl}}
        />
      </ImageBackground>
      <Text style={styles.description}>
        {collection.collectionDict.description}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    minHeight: 140,
    justifyContent: 'flex-end',
    paddingEnd: 6,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'flex-end',
  },
  description: {
    backgroundColor: '#efefef70',
    padding: 6,
  },
});

export default NFTCollectionHeader;
