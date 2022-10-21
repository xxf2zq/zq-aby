import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAlldata } from '@/store/modules/all'
import type { AppDispatch } from '../../store'

import AllFilter from './c-cpns/all-filter'
import AllRooms from './c-cpns/all-rooms'
import AllPagination from './c-cpns/all-pagination'

import { AllWrapper } from './style'
import { changeheaderConfigAction } from '@/store/modules/main'
const index = memo(() => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchAlldata())
    dispatch(changeheaderConfigAction({ isFixed: true }))
  }, [dispatch])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <AllWrapper>
      <AllFilter />
      <AllRooms />
      <AllPagination />
    </AllWrapper>
  )
})

export default index
