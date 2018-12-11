import { CLICK_UPDATE_VALUE, CLICK_ADD_VALUE } from './actionTypes';

let nextTodoId = 2

export const addAction = value => ({
    type: CLICK_ADD_VALUE,
    id: nextTodoId++,
    newValue: value
});


export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    id: nextTodoId++,
    newValue: value
});