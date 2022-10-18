import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getgoodprice,
  gethighscore,
  getdiscount,
  gethotrecommend,
  getlongfor,
  getPlusdata,
} from '@/service/modules/home'

export const fetchhomeDataAction = createAsyncThunk(
  'fetchdata',
  (payload: any, { dispatch }) => {
    getgoodprice().then((res) => {
      dispatch(changegoodPriceinfo(res))
    })
    gethighscore().then((res) => {
      dispatch(changehighscoreinfo(res))
    })
    getdiscount().then((res) => {
      dispatch(changediscountinfo(res))
    })
    gethotrecommend().then((res) => {
      dispatch(changehotrecommendinfo(res))
    })
    getlongfor().then((res) => {
      dispatch(changelongforinfo(res))
    })
    getPlusdata().then((res) => {
      dispatch(changeplusinfo(res))
    })
  }
)

const home = createSlice({
  name: 'home',
  initialState: {
    goodPriceinfo: {},
    highscoreinfo: {},
    discountinfo: {},
    hotrecommend: {},
    longforinfo: {},
    plusinfo: {},
  },
  reducers: {
    changegoodPriceinfo(state, { payload }) {
      state.goodPriceinfo = payload
    },
    changehighscoreinfo(state, { payload }) {
      state.highscoreinfo = payload
    },
    changediscountinfo(state, { payload }) {
      state.discountinfo = payload
    },
    changehotrecommendinfo(state, { payload }) {
      state.hotrecommend = payload
    },
    changelongforinfo(state, { payload }) {
      state.longforinfo = payload
    },
    changeplusinfo(state, { payload }) {
      state.plusinfo = payload
    },
  },
})
export const {
  changediscountinfo,
  changegoodPriceinfo,
  changehighscoreinfo,
  changehotrecommendinfo,
  changelongforinfo,
  changeplusinfo,
} = home.actions

export const homereducer = home.reducer
