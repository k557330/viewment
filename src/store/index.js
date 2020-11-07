import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import loading from './loading'
import menu, { menuSaga } from './menu'

const rootReducer = combineReducers({
    loading,
    menu
})

export function* rootSaga() {
    yield all([menuSaga()])    
}

export default rootReducer