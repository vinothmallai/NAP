import {getAuthData, injectBearer} from '../utils/fetchUtil';

export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_REQUEST_SUCCESS = 'LOAD_REQUEST_SUCCESS';
export const LOAD_REQUEST_FAILURE = 'LOAD_REQUEST_FAILURE';

export function loadRequest(){
  console.log('loadRequest triggereed');
  
  let clientcode = getAuthData().tdOrgCode;
  let access_token = getAuthData().access_token;

  let request = new Request('/api/TDRequest/List/'+ clientcode, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        }
  });

  return (dispatch) => {
    return fetch(request).then(response => {
      if (response.status !== 200) {
        console.log('failure');
        dispatch(loadRequestFailure("Invalid request"));
      } else {
        //response is a promise
        response.json().then(function(obj){
          console.log(response);
          dispatch(loadRequestSuccess(obj));
        })
      }

    }).catch( err => {
      dispatch(loadRequestFailure(err));
      throw err;
    })
  }

}

export function loadRequestSuccess(requests) {
  return {type: LOAD_REQUEST_SUCCESS, data: requests}
}

export function loadRequestFailure(error) {
  return {type: LOAD_REQUEST_SUCCESS, error: error}
}
