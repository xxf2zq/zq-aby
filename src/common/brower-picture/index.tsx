import React, { memo, useEffect, useState } from 'react'

import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import IconClose from '@/assets/svg/icon-cloase'
import IconArrowLeft from '@/assets/svg/Icon_left'
import IconArrowRight from '@/assets/svg/Icon_right'
import IconTriangleArrowBottom from '@/assets/svg/Icon_botton'
import IconTriangleArrowTop from '@/assets/svg/Icon_top'
import Dots from '@/common/indicator'

import { BrowerPictureWrapper } from './style'
import { IProps } from './type'
const index = memo((props: IProps) => {
  const { closePic, imgs } = props
  const [currentindex, setcurrindex] = useState(0)
  const [showlist, setshowList] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  // 处理箭头点击
  const handpicindex = (flag: boolean) => {
    let newIndex = flag ? currentindex + 1 : currentindex - 1
    if (newIndex < 0) newIndex = imgs.length - 1
    if (newIndex > imgs.length - 1) newIndex = 0
    setcurrindex(newIndex)
  }
  return (
    <BrowerPictureWrapper showlist={showlist}>
      <div className="close" onClick={closePic}>
        <IconClose></IconClose>
      </div>
      <div className="left-arr item" onClick={() => handpicindex(false)}>
        <IconArrowLeft width="77" height="77"></IconArrowLeft>
      </div>
      <div className="main">
        <div className="top">
          <SwitchTransition mode="in-out">
            <CSSTransition
              timeout={300}
              classNames="pic"
              key={imgs[currentindex]}
            >
              <img src={imgs[currentindex]} alt="" className="bigimg" />
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="desc">
          <div className="num">
            当前图片{currentindex + 1}/{imgs.length}
          </div>
          <div className="toggle" onClick={(e) => setshowList(!showlist)}>
            <span>{showlist ? '隐藏' : '显示'}照片列表</span>
            {showlist ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
          </div>
        </div>
        <div className="list">
          <Dots selectindex={currentindex}>
            {imgs.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames('item', {
                    active: index === currentindex,
                  })}
                  onClick={() => setcurrindex(index)}
                >
                  <img src={item} alt=""></img>
                </div>
              )
            })}
          </Dots>
        </div>
      </div>
      <div className="right-arr item" onClick={() => handpicindex(true)}>
        <IconArrowRight width="77" height="77"></IconArrowRight>
      </div>
    </BrowerPictureWrapper>
  )
})

export default index
