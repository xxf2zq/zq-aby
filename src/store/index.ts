import { configureStore } from '@reduxjs/toolkit'
import { homereducer } from './modules/home'
import { allreducer } from './modules/all'
import { deatilreducer } from './modules/detail'

const store = configureStore({
  reducer: {
    home: homereducer,
    all: allreducer,
    detail: deatilreducer,
  },
})
export type AppDispatch = typeof store.dispatch
export default store
