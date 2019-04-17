
import * as actions from './requestActions'

export default function requestReducer (state = [], action ){

  switch (action.type){

    case actions.LOAD_REQUEST_SUCCESS:
      return action.data

    default:
      return state
  }
}
