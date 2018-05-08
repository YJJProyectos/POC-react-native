import { 
    SELECTED_ISSUER,
    AUTH_TOKEN_CHANGED
} from "../actions/Issuer/IssuerTypes";

const INITIAL_STATE = {
    selectedIssuer: {issuer: "", url: ""},
    authToken: "",
    loading: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case SELECTED_ISSUER: return {...state, selectedIssuer: action.payload}
    case AUTH_TOKEN_CHANGED: return {...state, authToken: action.payload}
    default:
        return state;
    }
};
