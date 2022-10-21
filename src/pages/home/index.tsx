import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchhomeDataAction } from '@/store/modules/home'
import { changeheaderConfigAction } from '@/store/modules/main'

import { HomeWrapper } from './style'
import { AppDispatch } from '@/store'
import { IStoreState } from '@/store/type'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionV1 from './c-cpns/section-v1'
import SectionV2 from './c-cpns/section-v2'
import SectionV3 from './c-cpns/section-v3'
import HomeLongFor from './c-cpns/home-longfor'

import { isentiy } from '@/utils/isentry'

const index = memo(() => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchhomeDataAction('fetchdata'))
    dispatch(changeheaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [])

  const {
    goodPriceinfo,
    highScoreinfo,
    discountinfo,
    hotrecommend,
    longforinfo,
    plusinfo,
  } = useSelector(
    (state: IStoreState) => ({
      goodPriceinfo: state.home.goodPriceinfo,
      highScoreinfo: state.home.highscoreinfo,
      discountinfo: state.home.discountinfo,
      hotrecommend: state.home.hotrecommend,
      longforinfo: state.home.longforinfo,
      plusinfo: state.home.plusinfo,
    }),
    shallowEqual
  )
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isentiy(discountinfo) && (
          <SectionV2 SectionData={discountinfo}></SectionV2>
        )}
        {isentiy(hotrecommend) && (
          <SectionV2 SectionData={hotrecommend}></SectionV2>
        )}
        <SectionV1 SectionData={goodPriceinfo}></SectionV1>
        <SectionV1 SectionData={highScoreinfo}></SectionV1>
        {isentiy(longforinfo) && <HomeLongFor SectionData={longforinfo} />}
        {isentiy(plusinfo) && <SectionV3 SectionData={plusinfo} />}
      </div>
    </HomeWrapper>
  )
})

export default index
