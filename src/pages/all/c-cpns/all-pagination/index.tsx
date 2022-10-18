import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import Pagination from '@mui/material/Pagination'

import type { IStoreState } from '@/store/type'

import {
  changeCurrentpage,
  fetchAlldata,
  changeisloading,
} from '@/store/modules/all'
import { AllPaginationWrapper } from './style'

const index = memo(() => {
  const dispatch = useDispatch<any>()
  const [page, setPage] = React.useState(1)
  const { total, currentPage } = useSelector(
    (state: IStoreState) => ({
      total: state.all.total,
      currentPage: state.all.currentPage,
    }),
    shallowEqual
  )
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20
  const count = Math.ceil(total / 20)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changeCurrentpage(value - 1))
    dispatch(fetchAlldata())
    dispatch(changeisloading(true))
    setPage(value)
    window.scrollTo(0, 0)
  }
  return (
    <AllPaginationWrapper>
      {total && (
        <div className="info">
          <Pagination
            count={count}
            page={page}
            color="secondary"
            onChange={handleChange}
          />
          <div className="desc">
            第{start}个到{end}个房源,共超过{total}个
          </div>
        </div>
      )}
    </AllPaginationWrapper>
  )
})

export default index
