import {encode, encrypt} from '../utils/crypt';

//var test = require('../utils/crypt');

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

export function loginUser(user)
{

  var encodedPassword = encode(user.password);
  var data = "grant_type=password&username=" + user.userid + "&password=" + encodedPassword;

  const request = new Request('/token', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: data
  });

  return (dispatch) => {
    return fetch(request).then(response => {
      if (response.status !== 200) {
        dispatch(loginUserFailure("Invalid username or password."));
      } else {
        //response is a promise
        response.json().then(function(obj){
          console.log(response);

          //update the data into localstorage
          let authString = encrypt(obj);
          console.log(obj, authString);
          sessionStorage.setItem('authorisationData', authString);

          dispatch(loginUserSuccess(obj));
        })
      }

    }).catch( err => {
      diapatch(loginUserFailure(err));
      throw err;
    })
  }
}

export function loginUserSuccess(user) {
  return {type: LOGIN_USER_SUCCESS, data: user}
}

export function loginUserFailure(err) {
  return {type: LOGIN_USER_FAILURE, error: "Invalid username or password"}
}

export function logoutUser() {
  sessionStorage.removeItem('authorisationData');
  return {type: LOGOUT_USER, data: {}}
}
