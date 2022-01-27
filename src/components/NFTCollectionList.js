import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import NFTCollectionListItem from './NFTCollectionListItem';

const NFTCollectionList = props => {
  return (
    <FlatList
      style={styles.list}
      data={props.collections}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => props.onItemSelected?.(item)}>
            <NFTCollectionListItem
              imageUrl={item.first_nft.imageUrl}
              name={item.collectionDict.displayName}
              description={item.collectionDict.description}
              mintSource={item.issuer?.mintSource}
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.group_id + item.issuer?.id}
      onEndReachedThreshold={props.threshold}
      onEndReached={props.onEndReached}
      refreshing={props.refreshing}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 5,
  },
});

export default NFTCollectionList;

NFTCollectionList.propTypes = {
  threshold: PropTypes.number,
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      collectionDict: PropTypes.shape({
        id: PropTypes.number.isRequired,
        displayName: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  ),
  refreshing: PropTypes.bool,
  onEndReached: PropTypes.func,
  onItemSelected: PropTypes.func,
};

NFTCollectionList.defaultProps = {
  refreshing: false,
  threshold: 0.3,
  collections: [],
};
