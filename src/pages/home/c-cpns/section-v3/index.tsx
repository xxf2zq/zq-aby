import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/common/scorll-view'

import { SectionV3Wrapper } from './style'
import { IProps } from './type'
const index = memo((props: IProps) => {
  const { title, subtitle, list } = props.SectionData
  return (
    <SectionV3Wrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="list">
        <ScrollView>
          {list.map((item, index) => {
            return <RoomItem item={item} widthitem="20%" key={index}></RoomItem>
          })}
        </ScrollView>
      </div>
      <SectionFooter />
    </SectionV3Wrapper>
  )
})

export default index
