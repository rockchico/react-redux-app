import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
import { CLICK_ADD_VALUE } from '../actions/actionTypes';

const initialState = {
    list: [
        {id: 1, text: "opa", enabled: true},
        {id: 2, text: "epa", enabled: true},
    ]
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ADD_VALUE:
        return {
            ...state,
            list: state.list.concat({id: action.id, text: action.newValue})
        };
        case CLICK_UPDATE_VALUE:
        return state.map(
            todo =>
            todo.id === action.id ? { ...todo, enabled: !todo.enabled } : todo
        )
        default:
        return state;
    }
};