import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SearchTabs = memo((props: any) => {
  const { titles, tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index: number) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  return (
    <TabsWrapper>
      {titles.map((item: any, index: number) => {
        return (
          <div
            className={classNames('item', { active: currentIndex === index })}
            key={item}
            onClick={(e) => itemClickHandle(index)}
          >
            <span className="text">{item}</span>
            <span className="bottom"></span>
          </div>
        )
      })}
    </TabsWrapper>
  )
})

export default SearchTabs
