import { createAction, handleActions } from 'redux-actions'

const GET_KIND = 'option/GET_KIND'

export const getKind = createAction(GET_KIND)

const initialState = {
    kind: []
}

const option = handleActions({
    [GET_KIND]: (state, action) => ({
        ...state,
        kind: action.payload
    })
}, initialState)

export default option