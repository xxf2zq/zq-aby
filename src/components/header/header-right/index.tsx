import React, { memo, useState, useEffect } from 'react'
import type { MouseEvent } from 'react'

import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/Icon_global'
import IconMenu from '@/assets/svg/Icon_profile_menu'
import IconAvatar from '@/assets/svg/Icon_profile_avatar'

const index = memo(() => {
  const [showpanel, setshowpanel] = useState(false)
  const handlepannel = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setshowpanel(!showpanel)
  }

  useEffect(() => {
    function closepanelhandler() {
      setshowpanel(false)
    }
    window.addEventListener('click', closepanelhandler)
    return () => {
      window.removeEventListener('click', closepanelhandler)
    }
  }, [])
  return (
    <RightWrapper>
      <div className="btns">
        <span className="item">登录</span>
        <span className="item">注册</span>
        <span className="item">
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="profile" onClick={handlepannel}>
        <IconMenu />
        <IconAvatar />
      </div>
      {showpanel && (
        <div className="panal">
          <div className="top">
            <div className="item">注册</div>
            <div className="item">登录</div>
          </div>
          <div className="footer">
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        </div>
      )}
    </RightWrapper>
  )
})

export default index
