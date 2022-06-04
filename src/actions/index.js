import * as types from '../actions/types';

export const signIn = (userId) => {
    return {
        type: types.SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: types.SIGN_OUT,
    };
};
