import { createSlice } from '@reduxjs/toolkit'

const main = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
    },
  },
  reducers: {
    changeheaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    },
  },
})

export const { changeheaderConfigAction } = main.actions
export const mainreducer = main.reducer
