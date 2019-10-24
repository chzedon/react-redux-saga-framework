import {
  takeLatest,
  fork,
  all,
  put,
  delay
} from 'redux-saga/effects';
import * as ACTION from "actionType"

function* asyncHandle(action) {
  yield delay(5000)
  yield put({
    type: ACTION.HANDLE_COMMON,
    payload: {
      test: "HELLO WORLD"
    }
  })
}

export default function* rootSaga() {
  let sagas = [function* () {
    yield takeLatest(ACTION.HANDLE_COMMON_TEST, asyncHandle)
  }]
  yield all(sagas.map(saga => fork(saga)));
}