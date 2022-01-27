import React, {useState} from 'react';
import {Tab} from 'react-native-elements';
import PropTypes from 'prop-types';

const collectionTypes = ['all', 'ftx', 'sol', 'eth'];

const NFTCollectionTab = props => {
  const [collectionType, setCollectionType] = useState(0);
  return (
    <Tab
      value={collectionType}
      onChange={t => {
        setCollectionType(t);
        props.onSelected?.(collectionTypes[t]);
      }}>
      {collectionTypes.map(t => (
        <Tab.Item key={t} title={t.toUpperCase()} />
      ))}
    </Tab>
  );
};

export default NFTCollectionTab;

NFTCollectionTab.propTypes = {
  onSelected: PropTypes.func,
};
