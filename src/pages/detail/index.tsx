import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import DetailPicture from './c-cpns/detail-picture'

import type { IStoreState } from '../../store/type'

import { DetailWrapper } from './style'
import { changeheaderConfigAction } from '@/store/modules/main'
const index = memo(() => {
  const { itemobj } = useSelector(
    (state: IStoreState) => ({
      itemobj: state.detail.itemobj,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeheaderConfigAction({ isFixed: false }))
  }, [])
  return (
    <DetailWrapper>
      <DetailPicture picurls={itemobj.picture_urls} />
    </DetailWrapper>
  )
})

export default index
