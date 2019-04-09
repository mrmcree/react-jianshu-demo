import * as constants from './actionTypes';
import { fromJS } from 'immutable'
const defaultState = fromJS({
   logined:false,
   userName:''
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOGIN_SUCCESS:
            return state.merge({
                'logined':true,
                'userName':action.account
            })
        case constants.LOGOUT_SUCCESS:
            return state.set('logined',false)
        default:
            return state
    }

}