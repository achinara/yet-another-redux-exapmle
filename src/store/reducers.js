const initialState = {};

export function filterCards(state = initialState, action) {
  switch (action.type) {
    case 'FOR_SALE':
      return {
        ...state,
        showForSale: action.payload,
      };
    case 'SOLD':
      return {
        ...state,
        showSold: action.payload,
      };
    default:
      return state;
  }
}