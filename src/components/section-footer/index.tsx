import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import Classnames from 'classnames'
import IconMoreArrow from '@/assets/svg/Icon_more'

import { SectionFooterWrapper } from './style'
import { IProps } from './type'
const index = memo((props: IProps) => {
  const navigate = useNavigate()
  let { name } = props
  if (name) {
    name = `显示更多${name}房源`
  } else {
    name = '显示全部'
  }
  const goall = () => {
    navigate('/all')
  }
  return (
    <SectionFooterWrapper>
      <span
        onClick={goall}
        className={Classnames('desc', { active: name !== '显示全部' })}
      >
        {name}
      </span>
      <IconMoreArrow />
    </SectionFooterWrapper>
  )
})

export default index
