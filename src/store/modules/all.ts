import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getallRoomlist } from '@/service/modules/all'
export const fetchAlldata = createAsyncThunk(
  'alldata',
  (payload: void, { dispatch, getState }) => {
    getallRoomlist((getState() as any).all.currentPage * 20).then(
      (res: any) => {
        dispatch(changeroomlist(res.list))
        dispatch(changetotal(res.totalCount))
        dispatch(changeisloading(false))
      }
    )
  }
)

const allslice = createSlice({
  name: 'all',
  initialState: {
    currentPage: 0,
    roomlist: [],
    total: 0,
    isloading: false,
  },
  reducers: {
    changeCurrentpage(state, { payload }) {
      state.currentPage = payload
    },
    changetotal(state, { payload }) {
      state.total = payload
    },
    changeroomlist(state, { payload }) {
      state.roomlist = payload
    },
    changeisloading(state, { payload }) {
      state.isloading = payload
    },
  },
})

export const {
  changeCurrentpage,
  changeroomlist,
  changetotal,
  changeisloading,
} = allslice.actions

export const allreducer = allslice.reducer
