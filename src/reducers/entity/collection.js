export default (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS_NFT_COLLECTION_LIST':
      return {
        ...state,
        [action.meta.collectionType]: {
          ...state[action.meta.collectionType],
          count: action.payload.result.count,
          lastEndIndex: action.meta.endIndex,
          collections: [
            ...(state[action.meta.collectionType]?.collections || []),
            ...action.payload.result.collections,
          ],
        },
      };
    default:
      return state;
  }
};
