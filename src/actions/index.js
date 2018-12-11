import { CLICK_UPDATE_VALUE } from './actionTypes';

let nextTodoId = 2

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    id: nextTodoId++,
    newValue: value
});