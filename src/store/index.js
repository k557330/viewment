import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import loading from './loading'
import menu, { menuSaga } from './menu'
import option from './option'

const rootReducer = combineReducers({
    loading,
    menu,
    option
})

export function* rootSaga() {
    yield all([menuSaga()])    
}

export default rootReducer