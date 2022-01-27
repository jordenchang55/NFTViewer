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
    default:
      return state;
  }
};
