export default (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_NFT_COLLECTION_LIST':
      return {
        ...state,
        collectionListLoading: true,
      };
    case 'SUCCESS_NFT_COLLECTION_LIST':
      return {
        ...state,
        collectionListLoading: false,
      };
    case 'FAILURE_NFT_COLLECTION_LIST':
      return {
        ...state,
        collectionListLoading: false,
      };
    case 'REQUEST_GET_NFT_LIST':
      return {
        ...state,
        NFTListLoading: true,
      };
    case 'SUCCESS_GET_NFT_LIST':
      return {
        ...state,
        NFTListLoading: false,
      };
    case 'FAILURE_GET_NFT_LIST':
      return {
        ...state,
        NFTListLoading: false,
      };
    default:
      return state;
  }
};
