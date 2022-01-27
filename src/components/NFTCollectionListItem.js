import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const NFTCollectionListItem = ({name, description, imageUrl, mintSource}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle} numberOfLines={3}>
          {description}
        </Text>
      </View>
      <View style={styles.tagContainer}>
        {Boolean(mintSource) && (
          <Text style={styles.tagText}>{mintSource?.toUpperCase()}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginEnd: 8,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#0f0f0f',
  },
  subtitle: {
    color: '#3e3e3e',
  },
  textContainer: {
    paddingStart: 4,
    flex: 5,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tagText: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 3,
  },
});

export default NFTCollectionListItem;
