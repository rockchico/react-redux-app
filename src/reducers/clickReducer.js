import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    list: ["opa", "epa", "bla"]
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
        return {
            ...state,
            list: state.list.concat(action.newValue)
        };
        default:
        return state;
    }
};