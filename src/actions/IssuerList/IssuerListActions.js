import axios from "axios";
import { Actions } from "react-native-router-flux";
import {
  GET_ISSUERS,
  GET_ISSUERS_SUCCESS,
  GET_ISSUERS_ERROR
} from "./IssuerListTypes";

export const getIssuers = () => {
  return dispatch => {
    dispatch({ type: GET_ISSUERS });
    axios
      .get("https://poc-ecommerce-login.herokuapp.com/issuers")
      .then(function(response) {
        getIssuersSuccess(dispatch, response.data);
      })
      .catch(function(error) {
        alert(error);
        getIssuersError(dispatch, error);
      });
  };
};

export const goToIssuer = authToken => {
  Actions.main({ authToken: authToken });
  return dispatch => {};
};

const getIssuersSuccess = (dispatch, issuers) => {
  var issuersList = [];
  Object.keys(issuers).forEach(key =>
    issuersList.push({
      issuer: key,
      url: issuers[key]
    })
  );
  dispatch({ type: GET_ISSUERS_SUCCESS, payload: issuersList });
};

const getIssuersError = (dispatch, error) => {
  dispatch({ type: GET_ISSUERS_ERROR, payload: error });
};
