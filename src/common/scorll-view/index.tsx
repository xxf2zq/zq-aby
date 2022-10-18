import React, { memo, useEffect, useState, useRef } from 'react'

import IconArrowLeft from '@/assets/svg/Icon_left'
import IconArrowRight from '@/assets/svg/Icon_right'

import { ScrollWrapper } from './style'
const index = memo((props: any) => {
  const [showright, setshowRight] = useState(false)
  const [showleft, setshowleft] = useState(false)
  const [postionindex, setpositionindex] = useState(0)
  const totaldistanceref = useRef<any>() // 可滚动的距离
  const Divref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scrollWidth = Divref.current?.scrollWidth || 0
    const clientWidth = Divref.current?.clientWidth || 0
    const totaldistance = scrollWidth - clientWidth
    if (totaldistance) {
      setshowRight(true)
      // totaldistance.current = totaldistance
      totaldistanceref.current = totaldistance
    }
  }, [props.children])

  const moveleft = () => {
    const newindex = postionindex - 1
    const newel = Divref.current?.children[newindex] as HTMLDivElement
    Divref.current!.style.transform = `translate(-${newel.offsetLeft}px)`
    setpositionindex(newindex)
    // 是否继续显示右边按钮
    setshowRight(newel.offsetLeft < totaldistanceref.current)
    // 是否显示左边按钮
    setshowleft(newel.offsetLeft > 0)
  }
  const moveright = () => {
    let newindex = postionindex + 1
    const newel = Divref.current?.children[newindex] as HTMLDivElement
    Divref.current!.style.transform = `translate(-${newel.offsetLeft}px)`
    setpositionindex(newindex)
    // 是否继续显示右边按钮
    setshowRight(newel.offsetLeft < totaldistanceref.current)
    // 是否显示左边按钮
    setshowleft(newel.offsetLeft > 0)
  }
  return (
    <ScrollWrapper>
      {showleft && (
        <div className="left" onClick={moveleft}>
          <IconArrowLeft />
        </div>
      )}
      {showright && (
        <div className="right" onClick={moveright}>
          <IconArrowRight />
        </div>
      )}
      <div className="contain">
        <div className="scroll" ref={Divref}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default index
