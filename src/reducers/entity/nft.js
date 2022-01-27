const defaultState = {
  count: 0,
  lastIndex: 0,
  nfts: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SUCCESS_GET_NFT_LIST':
      return {
        ...state,
        count: action.payload.result.number,
        lastIndex: action.meta.endIndex,
        nfts: [...(state.nfts || []), ...action.payload.result.nfts],
      };
    case 'CLEAN_UP_NFT_LIST':
      return defaultState;
    default:
      return state;
  }
};
