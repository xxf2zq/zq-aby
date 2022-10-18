import React, { memo, useState } from 'react'

import Classnames from 'classnames'
import ScrollView from '@/common/scorll-view'

import { IProps } from './type'
import { TabsWrapper } from './style'

const index = memo((props: IProps) => {
  const { tabnames = [], tabclick } = props
  const [currentindex, setcurrentindex] = useState(0)
  const handeitem = (index: number) => {
    setcurrentindex(index)
    tabclick(index)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabnames.map((item, index) => {
          return (
            <div
              className={Classnames('item', {
                active: index === currentindex,
              })}
              key={item}
              onClick={() => handeitem(index)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

export default index
