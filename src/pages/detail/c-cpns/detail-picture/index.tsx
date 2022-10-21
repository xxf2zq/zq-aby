import React, { memo, useState } from 'react'

import BrowerPic from '@/common/brower-picture'

import { DetailPictureWrapper } from './style'
import type { IProps } from './type'
const index = memo((props: IProps) => {
  const { picurls } = props
  const [showpic, setshowpic] = useState(false)

  // 关闭预览框
  const closePic = () => {
    setshowpic(false)
  }
  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <img src={picurls[0]} alt="" onClick={() => setshowpic(true)} />
          <div className="cover"></div>
        </div>
        <div className="right">
          {picurls.slice(1, 5).map((sitem, index) => {
            return (
              <div className="item" key={index}>
                <img src={sitem} onClick={() => setshowpic(true)} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
        <button className="check" onClick={() => setshowpic(true)}>
          查看图片
        </button>
        {showpic && <BrowerPic imgs={picurls} closePic={closePic}></BrowerPic>}
      </div>
    </DetailPictureWrapper>
  )
})

export default index
