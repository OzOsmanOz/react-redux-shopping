import { createStore, combineReducers } from "redux";

import ProductsReducer from "../Redux/Reducer/ProductsReducer";

const rootReducer = combineReducers({
  productsState: ProductsReducer,
});

const Store = createStore(rootReducer);

export default Store;
