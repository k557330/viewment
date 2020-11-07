import { createAction, handleActions } from 'redux-actions'
import { call, put, takeLatest } from 'redux-saga/effects'

import { callSelectAll } from '../api/db'

import { startLoading, finishLoading } from './loading'

const GET_MENU = 'movie/GET_MENU'
const GET_MENU_SUCCESS = 'movie/GET_MENU_SUCCESS'
const GET_MENU_FAILURE = 'movie/GET_MENU_FAILURE'

export const getMenu = createAction(GET_MENU)

export function* getMenuSaga() {
    yield put(startLoading())
    try{
        const MENU = yield call(callSelectAll, "menu")
        yield put({
            type: GET_MENU_SUCCESS,
            payload: MENU.data
        })
    }
    catch(e){
        yield put({
            type: GET_MENU_FAILURE,
            error: e
        })
    }
    yield put(finishLoading())
}

export function* menuSaga() {
    yield takeLatest(GET_MENU, getMenuSaga)
}

const initialState = {
    menu: [],
    error: false
}

const menu = handleActions({
    [GET_MENU_SUCCESS]: (state, action) => ({
        ...state,
        menu: action.payload
    }),
    [GET_MENU_FAILURE]: (state, action) => ({
        ...state,
        error: action.payload
    })
}, initialState)

export default menu