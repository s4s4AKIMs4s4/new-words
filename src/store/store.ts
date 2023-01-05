import { combineReducers, configureStore } from '@reduxjs/toolkit'
import sessionReducer from './slice/sessionSlice'
import userReducer from './slice/userSlice'
const rootReducer = combineReducers({
  userReducer,
  sessionReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
