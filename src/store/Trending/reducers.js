import * as types from "./types";

const INITIAL_STATE = {
  list: [],
  details: null,
};

const trendingReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_TRENDING_RESPONSE:
      return {
        ...state,
        list: action.payload.list,
      };
    case types.GET_DATA_RESPONSE:
      return {
        ...state,
        list: action.payload.list,
      };
       case types.GET_DETAILS_RESPONSE:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default trendingReducers;
