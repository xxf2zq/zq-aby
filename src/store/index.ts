import { configureStore } from '@reduxjs/toolkit'
import { homereducer } from './modules/home'
import { allreducer } from './modules/all'
import { deatilreducer } from './modules/detail'
import { mainreducer } from './modules/main'

const store = configureStore({
  reducer: {
    home: homereducer,
    all: allreducer,
    detail: deatilreducer,
    main: mainreducer,
  },
})
export type AppDispatch = typeof store.dispatch
export default store
