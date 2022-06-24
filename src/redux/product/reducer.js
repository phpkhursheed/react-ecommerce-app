const initialState = {
  products: [],
  loadingStatus: true,
};
const Products = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS": {
      return { ...state, products: action.payload, loadingStatus: false };
    }

    default: {
      return state;
    }
  }
};
export default Products;
