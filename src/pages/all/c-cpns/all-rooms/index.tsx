import React, { memo, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import RoomItem from '@/components/room-item'
import type { IStoreState } from '@/store/type'

import { AllRoomsWrapper } from './style'
import { Backdrop, CircularProgress } from '@mui/material'
const index = memo(() => {
  const navgation = useNavigate()
  const { roomlist, isloading } = useSelector(
    (state: IStoreState) => ({
      roomlist: state.all.roomlist,
      isloading: state.all.isloading,
    }),
    shallowEqual
  )
  const godatailformall = useCallback(() => {
    navgation('/detail')
  }, [navgation])
  return (
    <AllRoomsWrapper>
      <h2>共300+房屋</h2>
      <div className="list">
        {roomlist.map((item) => {
          return (
            <RoomItem
              item={item}
              godatailfn={godatailformall}
              widthitem="20%"
              key={item._id}
            ></RoomItem>
          )
        })}
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isloading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </AllRoomsWrapper>
  )
})

export default index
