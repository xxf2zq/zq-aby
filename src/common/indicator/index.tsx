import React, { memo, useEffect, useRef } from 'react'

import { IndicationWrapper } from './style'
import type { IProps } from './type'
const index = memo((props: IProps) => {
  const { selectindex } = props
  useEffect(() => {
    const divel = IditionRef.current?.children[selectindex] as HTMLElement
    console.log(divel)
    const offsetleft = divel.offsetLeft
    const elclientwidth = divel.clientWidth
    const contentclientwidth = IditionRef.current!.clientWidth
    const contentscrollwidth = IditionRef.current!.scrollWidth
    console.log(offsetleft)
    let dispatnce = offsetleft + elclientwidth / 2 - contentclientwidth / 2
    const totaldistance = contentscrollwidth - contentclientwidth
    if (dispatnce < 0) dispatnce = 0
    if (dispatnce > totaldistance) dispatnce = totaldistance
    IditionRef.current!.style.transform = `translateX(${-dispatnce}px)`
  }, [selectindex])
  const IditionRef = useRef<HTMLDivElement>(null)
  return (
    <IndicationWrapper>
      <div className="i-content" ref={IditionRef}>
        {props.children}
      </div>
    </IndicationWrapper>
  )
})

export default index
