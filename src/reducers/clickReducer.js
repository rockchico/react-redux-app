import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
import { CLICK_ADD_VALUE } from '../actions/actionTypes';

const initialState = {
    list: [
        {id: 1, text: "opa"},
        {id: 2, text: "epa"},
    ]
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_ADD_VALUE:
        return {
            ...state,
            list: state.list.concat({id: action.id, text: action.newValue})
        };
        default:
        return state;
    }
};