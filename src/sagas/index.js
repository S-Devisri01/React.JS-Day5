import { all, fork } from 'redux-saga/effects';
import { watchFetchData } from './dataSaga';

export default function* rootSaga() {
  yield all([fork(watchFetchData)]);
}
