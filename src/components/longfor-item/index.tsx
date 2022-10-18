import React, { memo } from 'react'

import { LongforItemWrapper } from './style'
import { IProps } from './type'
const index = memo((props: IProps) => {
  const { picture_url, price, city } = props.item
  return (
    <LongforItemWrapper>
      <div className="item">
        <div className="img">
          <img src={picture_url} alt="" />
        </div>
        <div className="info">
          <div>{city}</div>
          <div className="price">均价 {price}</div>
        </div>
      </div>
    </LongforItemWrapper>
  )
})

export default index
