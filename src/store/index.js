import { createStore, applyMiddleware } from "redux";
import { Reducers } from '../reducers';
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from 'redux-saga'

import { helloSaga } from '../sagas'
const sagaMiddleware = createSagaMiddleware()

export const Store = createStore(
    Reducers,
    applyMiddleware(forbiddenWordsMiddleware, sagaMiddleware),
);

sagaMiddleware.run(helloSaga)