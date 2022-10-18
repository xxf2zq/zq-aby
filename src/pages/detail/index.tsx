import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import DetailPicture from './c-cpns/detail-picture'

import type { IStoreState } from '../../store/type'

import { DetailWrapper } from './style'
const index = memo(() => {
  const { itemobj } = useSelector(
    (state: IStoreState) => ({
      itemobj: state.detail.itemobj,
    }),
    shallowEqual
  )
  return (
    <DetailWrapper>
      <DetailPicture picurls={itemobj.picture_urls} />
    </DetailWrapper>
  )
})

export default index
