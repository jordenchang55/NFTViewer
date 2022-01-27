/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NFTCollectionTab from '../components/NFTCollectionTab';
import {getNFTCollectionList} from '../actions/apiActions';
import {connect} from 'react-redux';
import NFTCollectionList from '../components/NFTCollectionList';

const mapStateToProps = state => ({
  collection: state.entity.collection,
  loading: state.ui.collectionListLoading,
});

const mapDispatchToProps = {
  getNFTCollectionList,
};

const BATCH_SIZE = 20;

const NFTCollectionListPage = props => {
  const [selectedType, setCollectionType] = useState('all');

  useEffect(() => {
    if (!props.collection[selectedType]?.collections) {
      props.getNFTCollectionList(selectedType, 0, BATCH_SIZE);
    }
  }, [selectedType]);
  return (
    <View style={styles.container}>
      <NFTCollectionTab
        onSelected={collectionType => {
          setCollectionType(collectionType);
        }}
      />
      <NFTCollectionList
        collections={props.collection[selectedType]?.collections}
        refreshing={props.loading}
        onEndReached={() => {
          if (!props.loading && props.collection[selectedType]?.lastEndIndex) {
            props.getNFTCollectionList(
              selectedType,
              props.collection[selectedType].lastEndIndex,
              props.collection[selectedType]?.lastEndIndex + BATCH_SIZE,
            );
          }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NFTCollectionListPage);
