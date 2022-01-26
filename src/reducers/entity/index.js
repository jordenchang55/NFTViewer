import {combineReducers} from 'redux';
import collection from './collection';
import nft from './nft';
export default combineReducers({
  nft,
  collection,
});
