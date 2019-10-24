import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import rootSaga from "saga/rootSaga"
import createSagaMiddleware from 'redux-saga';
import commonState from "reducer/common"

const sagaMiddleware = createSagaMiddleware({
  onError(er) {
    console.log(er)
  }
})

const composeEnhancers = process.env.NODE_ENV === "development" ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;


export default createStore(combineReducers({
  commonState
}), composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)