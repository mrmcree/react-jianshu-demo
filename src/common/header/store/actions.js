import * as actionTypes from './actionTypes'
export const handleFocus = () => {
    return (dispatch) => {
        const action = {
            type: actionTypes.SEARCH_FOCUS
        }
        dispatch(action)
    }
}
export const handleBlur = () => {
    return (dispatch) => {
        const action = {
            type: actionTypes.SEARCH_BLUR
        }
        dispatch(action)
    }
}