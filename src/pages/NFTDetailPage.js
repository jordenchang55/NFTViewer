import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';

const NFTDetailPage = props => {
  const {nft} = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Image
          style={styles.image}
          source={{uri: nft.imageUrl}}
          resizeMode="cover"
        />
        <Text style={styles.description}>{nft.description}</Text>
        <Card.Divider />
        <View style={styles.horizontalTextContainer}>
          <Text style={styles.subtitle}>Issuer</Text>
          <Text style={styles.description}>{nft.issuer}</Text>
        </View>
        <View style={styles.horizontalTextContainer}>
          <Text style={styles.subtitle}>Collection</Text>
          <Text style={styles.description}>{nft.collection}</Text>
        </View>
        {Boolean(nft.auction) && (
          <View>
            <Card.Divider />
            <Text style={styles.title}>Auction</Text>
            <View style={styles.auctionContainer}>
              <View style={styles.attributeItemContainer}>
                <Text style={styles.subtitle}>Best Bid</Text>
                <Text style={styles.description}>{nft.auction.bestBid}</Text>
              </View>
              <View style={styles.attributeItemContainer}>
                <Text style={styles.subtitle}>Minimum Next Bid</Text>
                <Text style={styles.description}>{nft.auction.minNextBid}</Text>
              </View>
            </View>
          </View>
        )}
        <Card.Divider />
        <Text style={styles.title}>Attributes</Text>
        <View>
          {nft.attributesList.map(attr => (
            <View key={attr.trait_type} style={styles.horizontalTextContainer}>
              <Text style={styles.subtitle}>{attr.trait_type}</Text>
              <Text style={[styles.description, styles.attributeDescription]}>
                {attr.value}
              </Text>
            </View>
          ))}
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#0f0f0f',
  },
  subtitle: {
    fontWeight: '600',
    color: '#0f0f0f',
  },
  description: {
    color: '#3e3e3e',
  },
  horizontalTextContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  auctionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  attributeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  attributeItemContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  attributeDescription: {
    flex: 1,
    textAlign: 'right',
  },
});

export default NFTDetailPage;
