import { put, call, takeEvery } from "redux-saga/effects";
import * as types from "./types";
import { getTrending, getSearchData, getDetails } from "../../network/trending";
import {
  getTrendingResponse,
  getSearchDataResponse,
  getDetailsResponse,
} from "./actions";

export function* getTrendingSaga({ payload }) {
  try {
    const response = yield call(getTrending, payload);
    yield put(
      getTrendingResponse({
        list: response.data.results,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
export function* getSearchDataSaga({ payload }) {
  try {
    const response = yield call(getSearchData, payload);
    yield put(
      getSearchDataResponse({
        list: response.data.results,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export function* getDetailsSaga({ payload }) {
  try {
    const response = yield call(getDetails, payload);
    yield put(getDetailsResponse(response.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* TrendingSagas() {
  yield takeEvery(types.GET_TRENDING_REQUEST, getTrendingSaga);
  yield takeEvery(types.GET_DATA_REQUEST, getSearchDataSaga);
  yield takeEvery(types.GET_DETAILS_REQUEST, getDetailsSaga);
}
