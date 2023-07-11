
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import groupReducer from './group'
import cashReducer from './cash'

export const store = configureStore({
  reducer: { user: userReducer, group: groupReducer, cash: cashReducer
},
})
