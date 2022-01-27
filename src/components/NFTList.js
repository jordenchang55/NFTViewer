import PropTypes from 'prop-types';
import NFTCollectionHeader from './NFTCollectionHeader';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NFTListItem from './NFTListItem';
import React from 'react';

const NFTList = props => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <NFTCollectionHeader collection={props.collection} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={() =>
        !props.refreshing && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {' '}
              No available NFT in this collection
            </Text>
          </View>
        )
      }
      refreshing={props.refreshing}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
      data={props.nfts}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => props.onItemSelected?.(item)}>
          <NFTListItem nft={item} />
        </TouchableOpacity>
      )}
      onEndReachedThreshold={0.3}
      onEndReached={props.onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  contentContainer: {
    padding: 5,
  },
  emptyContainer: {
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
  },
  itemContainer: {
    flex: 1,
  },
});

export default NFTList;

NFTList.propTypes = {
  collection: PropTypes.shape({}).isRequired,
  nfts: PropTypes.arrayOf(PropTypes.shape({})),
  refreshing: PropTypes.bool,
  onItemSelected: PropTypes.func,
  onEndReached: PropTypes.func,
};

NFTList.defaultProps = {
  nfts: [],
  refreshing: false,
};
