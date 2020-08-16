import {
    LOGIN_SUCCESS, LOGIN_ERROR
} from '../actions/index';

let newState = { user: { loggedIn: false } };

export default function (state, action) {
    console.log('type in reducer', action.type);

    switch (action.type) {
        case LOGIN_SUCCESS:
            newState.user.loggedIn = true;
            return newState;

        default:
            newState.user.loggedIn = false;
            return newState;
    }
};