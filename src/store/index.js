import { createStore, applyMiddleware } from "redux";
import { Reducers } from '../reducers';
import { forbiddenWordsMiddleware } from "../middleware";

//export const Store = createStore(Reducers);

export const Store = createStore(
    Reducers,
    applyMiddleware(forbiddenWordsMiddleware)
  );