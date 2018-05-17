import axios from "axios";
import { Actions } from "react-native-router-flux";
import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR
} from "./productTypes";

export const getProduct = (id) => {
  return dispatch => {
    dispatch({ type: GET_PRODUCT });
    axios
      .get('http://www.mocky.io/v2/5af1eda2300000fd08ba8260')
      .then(function(response) {
        getProductSuccess(dispatch, response.data);
      })
      .catch(function(error) {
        alert(error);
        getProductError(dispatch, error);
      });
  };

};


const getProductSuccess = (dispatch, product) => {
  alert(JSON.stringify(product));
  dispatch({ type: GET_PRODUCT_SUCCESS, payload: product});
};

const getIssuersError = (dispatch, error) => {
  dispatch({ type: GET_PRODUCT_ERROR, payload: error });
};
