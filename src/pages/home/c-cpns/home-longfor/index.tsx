import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/common/scorll-view'

import { IPops } from './type'
import { HomeLongForWrapper } from './style'
const index = memo((props: IPops) => {
  const { title, subtitle, list } = props.SectionData
  return (
    <HomeLongForWrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="list">
        <ScrollView>
          {list.map((item, index) => {
            return <LongforItem item={item} key={index}></LongforItem>
          })}
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

export default index
