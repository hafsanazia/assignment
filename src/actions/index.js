export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials) {
    console.log('user cred', userCredentials);
    if (userCredentials.userName == 'hruday@gmail.com' && userCredentials.password == 'hruday123') {
        console.log('success');
        return {
            type: LOGIN_SUCCESS
        }
    }
    else {
        console.log('failed');
        return {
            type: LOGIN_ERROR
        }
    }
}