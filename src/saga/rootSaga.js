import * as saga from 'redux-saga/effects';

export default function* rootSaga() {
  const sagas = [];
  yield saga.all(sagas.map(saga =>
    saga.spawn(function* () {
      while (true) {
        try {
          yield saga.call(saga);
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