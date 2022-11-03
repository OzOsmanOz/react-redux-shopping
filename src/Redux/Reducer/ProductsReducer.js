const initialState = {
  start: false,
  success: false,
  products: [],
  fail: false,
  errorMassege: "",
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return {
        ...state,
        start: true,
      };
    case "FETCH_PRODUCTS_SUCCES":
      return {
        ...state,
        start: false,
        success: true,
        products: action.payload,
      };
    case "FETCH_PRODUCTS_FAIL":
      return {
        ...state,
        start: false,
        fail: true,
        errorMassege: action.payload,
      };

    default:
      return state;
  }
};
export default ProductsReducer;
