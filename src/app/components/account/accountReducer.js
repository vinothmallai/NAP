
import * as actions from './accountActions'
import {getAuthData} from '../utils/fetchUtil'

const initialState = Object.assign({
  userName : '',
  error: ''
}, getAuthData());


export default function accountReducer (state = initialState, action ){

  switch (action.type){

    case actions.LOGIN_USER_SUCCESS:
      return action.data

    case actions.LOGIN_USER_FAILURE:
      return Object.assign({}, {error:action.error});

    case actions.LOGOUT_USER:
        return initialState

    default:
      return state
  }
}
