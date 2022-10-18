import React, { memo, useCallback, useState } from 'react'

import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

import { IProps } from './type'
import { SectionV2Wraapper } from './style'

const index = memo((props: IProps) => {
  const { SectionData = {} } = props
  const tabnames: string[] = SectionData.dest_address?.map(
    (item: any) => item.name
  )
  const [cityname, setcityname] = useState(tabnames[0])
  // // tabitem的点击
  const tabclick = useCallback(
    (index: number) => {
      const name = tabnames[index]
      setcityname(name)
    },
    [tabnames]
  )
  return (
    <SectionV2Wraapper>
      <SectionHeader
        title={SectionData.title}
        subtitle={SectionData.subtitle}
      />
      <SectionTabs tabnames={tabnames} tabclick={tabclick}></SectionTabs>
      <SectionRooms
        list={SectionData?.dest_list?.[cityname]}
        widthitem="33.33%"
      />
      <SectionFooter name={cityname} />
    </SectionV2Wraapper>
  )
})

export default index
