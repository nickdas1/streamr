import * as types from "../actions/types";

const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_STREAMS:
            const streamsObj = action.payload.reduce((acc, stream) => {
                acc[stream.id] = stream;
                return acc;
            }, {});
            return { ...state, ...streamsObj };
        case types.FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case types.CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case types.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case types.DELETE_STREAM:
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        default:
            return state;
    }
};

export default streamReducer;
