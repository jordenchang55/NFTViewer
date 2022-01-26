export default (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS_GET_NFT_LIST':
      return {
        ...state,
        count: action.payload.number,
        lastIndex: action.meta.endIndex,
        nfts: [...state.nfts, action.payload.nfts],
      };

    default:
      return state;
  }
};
