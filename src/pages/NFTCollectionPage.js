/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {getNFTs} from '../actions/apiActions';
import {cleanUpNFTList} from '../actions/actions';
import NFTList from '../components/NFTList';

const mapStateToProps = state => ({
  nfts: state.entity.nft.nfts,
  lastIndex: state.entity.nft.lastIndex,
  loading: state.ui.NFTListLoading,
});
const mapDispatchToProps = {
  getNFTs,
  cleanUpNFTList,
};

const BATCH_SIZE = 16;

const NFTCollectionPage = props => {
  const {collection} = props.route.params;
  useEffect(() => {
    props.getNFTs(collection.collectionDict.name, 0, BATCH_SIZE);
    return () => props.cleanUpNFTList();
  }, []);

  return (
    <View style={styles.container}>
      <NFTList
        collection={collection}
        nfts={props.nfts}
        refreshing={props.loading}
        onEndReached={() => {
          props.getNFTs(
            collection.collectionDict.name,
            props.lastIndex,
            props.lastIndex + BATCH_SIZE,
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NFTCollectionPage);
