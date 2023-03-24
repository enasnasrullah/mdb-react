import * as types from "./types";

export const getTrendingRequest = (data) => ({
  type: types.GET_TRENDING_REQUEST,
  payload: data
});

export const getTrendingResponse = (data) => ({
  type: types.GET_TRENDING_RESPONSE,
  payload: data
});


export const getSearchDataRequest = (data) => ({
  type: types.GET_DATA_REQUEST,
  payload: data
});

export const getSearchDataResponse = (data) => ({
  type: types.GET_DATA_RESPONSE,
  payload: data
});

export const getDetailsRequest = (data) => ({
  type: types.GET_DETAILS_REQUEST,
  payload: data
});

export const getDetailsResponse = (data) => ({
  type: types.GET_DETAILS_RESPONSE,
  payload: data
});