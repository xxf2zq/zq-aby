import React, { memo } from 'react'

import { IProp } from './type'
import { SectionHeader } from './style'
const index = memo((props: IProp) => {
  return (
    <SectionHeader>
      <h2>{props.title}</h2>
      {props.subtitle && <div>{props.subtitle}</div>}
    </SectionHeader>
  )
})

export default index
