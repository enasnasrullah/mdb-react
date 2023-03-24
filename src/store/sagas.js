import { all } from "redux-saga/effects";
import TrendingSagas from './Trending/sagas'

export default function* rootSaga() {
  yield all([
  TrendingSagas()
  ]);
}
