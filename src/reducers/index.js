import { combineReducers } from "redux";
import IssuerListReducer from "./IssuerListReducer";
import ProductListReducer from "./ProductReducer";

export default combineReducers({
  issuersList: IssuerListReducer,
  product: ProductListReducer
});
