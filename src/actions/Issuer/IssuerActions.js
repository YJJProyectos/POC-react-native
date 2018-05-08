import axios from "axios";
import { Actions } from "react-native-router-flux";
import { 
    SELECTED_ISSUER,
    AUTH_TOKEN_CHANGED
} from "./IssuerTypes";

export const issuerChanged = (issuer) => {
    return { type: SELECTED_ISSUER, payload: issuer };
};

export const authTokenChanged = (authToken) => {
    return { type: AUTH_TOKEN_CHANGED, payload: authToken };
};