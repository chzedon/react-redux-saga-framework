import {
  spawn,
  all,
  call
} from 'redux-saga/effects';
import commonSaga from "./common.js";


export default function* rootSaga() {
  const sagas = [commonSaga];
  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {

          if (typeof e === "string") {

          } else if (e && e.message) {

          }
          console.log(e);
        }
      }
    })
  ));
}