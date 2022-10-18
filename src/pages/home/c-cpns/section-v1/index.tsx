import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
import { IProps } from './type'
import { SectionV1Wrapper } from './style'
const index = memo((props: IProps) => {
  const { SectionData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader
        title={SectionData.title}
        subtitle={SectionData.subtitle}
      />
      <div className="list">
        <SectionRooms list={SectionData.list} />
      </div>
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

export default index
