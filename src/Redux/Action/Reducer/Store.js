import ProductsReducer from "./ProductsReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  productsState: ProductsReducer,
});

const Store = createStore(rootReducer);

export default Store;
