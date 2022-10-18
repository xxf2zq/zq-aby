import React, { memo } from 'react'

import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'

import { HeaderWrapper } from './style'
const index = memo(() => {
  return (
    <HeaderWrapper>
      <div className="left">
        <HeaderLeft />
      </div>
      <div className="center">
        <HeaderCenter />
      </div>
      <div className="right">
        <HeaderRight />
      </div>
    </HeaderWrapper>
  )
})

export default index
