import {createAction} from 'redux-api-middleware';

export const getNFTCollectionList = (
  collectionType = 'all',
  startIndex = 0,
  endIndex = 15,
) =>
  createAction({
    endpoint: `https://ftx.us/api/nft/collections_page?collectionType=${collectionType}&startInclusive=${startIndex}&endExclusive=${endIndex}`,
    method: 'GET',
    types: [
      'REQUEST_NFT_COLLECTION_LIST',
      {
        type: 'SUCCESS_NFT_COLLECTION_LIST',
        meta: {
          collectionType,
          endIndex,
        },
      },
      'FAILURE_NFT_COLLECTION_LIST',
    ],
  });

export const getNFTs = (
  collectionName = 'all',
  startIndex = 0,
  endIndex = 15,
) =>
  createAction({
    endpoint: `https://ftx.us/api/nft/nfts_filtered?nft_filter_string={"collection": "${collectionName}"}&startInclusive=${startIndex}&endExclusive=${endIndex}`,
    method: 'GET',
    types: [
      'REQUEST_GET_NFT_LIST',
      {
        type: 'SUCCESS_GET_NFT_LIST',
        meta: {
          endIndex,
        },
      },
      'FAILURE_GET_NFT_LIST',
    ],
  });
