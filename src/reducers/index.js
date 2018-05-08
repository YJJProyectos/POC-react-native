import { combineReducers } from "redux";
import IssuerListReducer from "./IssuerListReducer";

export default combineReducers({
  issuersList: IssuerListReducer
});
