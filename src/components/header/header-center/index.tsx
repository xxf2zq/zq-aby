import React, { memo } from 'react'

import IconSearchBar from '@/assets/svg/Icon_search'
import { CenterWrapper } from './style'
const index = memo(() => {
  return (
    <CenterWrapper>
      <span>搜索房源和体验</span>
      <div className="search">
        <IconSearchBar></IconSearchBar>
      </div>
    </CenterWrapper>
  )
})

export default index
