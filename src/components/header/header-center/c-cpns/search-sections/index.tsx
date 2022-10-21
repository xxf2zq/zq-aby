import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionsWrapper } from './style'

const SearchSections = memo((props: any) => {
  const { searchInfos } = props

  return (
    <SectionsWrapper>
      {searchInfos.map((item: any, index: number) => {
        return (
          <div className="item" key={index}>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
            {index !== searchInfos.length - 1 && (
              <div className="divider"></div>
            )}
          </div>
        )
      })}
    </SectionsWrapper>
  )
})


export default SearchSections
