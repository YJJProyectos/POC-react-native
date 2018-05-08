import { combineReducers } from 'redux';
import IssuerListReducer from "./IssuerListReducer";
import IssuerReducer from "./IssuerReducer";

export default combineReducers({
    issuersList: IssuerListReducer,
    issuer: IssuerReducer
});
