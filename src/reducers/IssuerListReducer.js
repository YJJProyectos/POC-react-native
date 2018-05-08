import {
  GET_ISSUERS,
  GET_ISSUERS_SUCCESS,
  GET_ISSUERS_ERROR
} from "../actions/IssuerList/IssuerListTypes";
  
  const INITIAL_STATE = {
    issuers: [],
    loading: false,
    error: null
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_ISSUERS: return {...state, loading: true, error: null}
      case GET_ISSUERS_SUCCESS: return {...state, ...INITIAL_STATE, issuers: action.payload}
      case GET_ISSUERS_ERROR: 
        return {...state, ...INITIAL_STATE, error: "Ocurrió un error al obtener los issuers"}
      default:
        return state;
    }
  };
  