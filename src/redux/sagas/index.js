import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchData() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error: error.message });
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchData);
}

export default function* rootSaga() {
  yield watchFetchData();
}
