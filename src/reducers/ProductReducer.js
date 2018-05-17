import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR
} from "../actions/product/productTypes";
  
  const INITIAL_STATE = {
    product: null,
    loading: false,
    error: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_PRODUCT: return {...state, loading: true, error: null}
      case GET_PRODUCT_SUCCESS: return {...state, ...INITIAL_STATE, product: action.payload}
      case GET_PRODUCT_ERROR: 
        return {...state, ...INITIAL_STATE, error: "Ocurrió un error al obtener el producto"}
      default:
        return state;
    }
  };