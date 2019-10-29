import { CLICK_UPDATE_VALUE, CLICK_ADD_VALUE } from './actionTypes';

let nextTodoId = 3

export const addAction = value => ({
    type: CLICK_ADD_VALUE,
    id: nextTodoId++,
    newValue: value
});


export const updateAction = value => ({
    type: CLICK_UPDATE_VALUE,
    id: value.id,
});