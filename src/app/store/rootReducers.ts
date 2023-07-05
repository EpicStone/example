import { combineReducers } from '@reduxjs/toolkit'
import { isMobileReducer } from 'shared/reducers'

export const rootReducer = combineReducers({
  isMobileReducer,
})
