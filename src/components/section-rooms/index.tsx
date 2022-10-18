import React, { memo } from 'react'
import RoomItem from '../room-item'

import { IProps } from './type'
import { RoomsWrapper } from './style'
const index = memo((props: IProps) => {
  const { list, widthitem } = props
  return (
    <RoomsWrapper>
      {list?.slice(0, 8).map((item: any) => {
        return <RoomItem key={item.id} item={item} widthitem={widthitem} />
      })}
    </RoomsWrapper>
  )
})

export default index
