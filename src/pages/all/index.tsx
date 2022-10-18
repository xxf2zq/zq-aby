import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAlldata } from '@/store/modules/all'
import type { AppDispatch } from '../../store'

import AllFilter from './c-cpns/all-filter'
import AllRooms from './c-cpns/all-rooms'
import AllPagination from './c-cpns/all-pagination'

import { AllWrapper } from './style'
const index = memo(() => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchAlldata())
  }, [dispatch])

  return (
    <AllWrapper>
      <AllFilter />
      <AllRooms />
      <AllPagination />
    </AllWrapper>
  )
})

export default index
