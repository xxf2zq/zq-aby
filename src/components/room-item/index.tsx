import classNames from 'classnames'
import { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { useDispatch } from 'react-redux'

import { changeitemobj } from '@/store/modules/detail'
import IconArrowLeft from '@/assets/svg/Icon_left'
import IconArrowRight from '@/assets/svg/Icon_right'
import Dots from '@/common/indicator'

import { IProps } from './type'
import type { CarouselRef } from 'antd/lib/carousel'
import { RoomWrapper } from './style'
import LazyLoad from 'react-lazyload'
import { Rating } from '@mui/material'
const index = memo((props: IProps) => {
  const dispatch = useDispatch<any>()
  const swiperref = useRef<CarouselRef>(null)
  const [selectindex, setselectindex] = useState(0)
  const {
    picture_urls,
    picture_url,
    verify_info,
    name,
    price_format,
    bottom_info,
    star_rating,
  } = props.item
  const { widthitem, godatailfn } = props
  const onChange = (currentSlide: number) => {}

  // 上一张轮播图
  const prepic = () => {
    swiperref.current?.prev()
    let index = selectindex === 0 ? picture_urls.length : selectindex
    setselectindex(index - 1)
  }
  // 下一张轮播图
  const nextpic = () => {
    swiperref.current?.next()
    let index = selectindex === picture_urls.length - 1 ? -1 : selectindex
    setselectindex(index + 1)
  }
  // 跳转到详情页
  const godetail = () => {
    dispatch(changeitemobj(props.item))
    godatailfn && godatailfn()
  }
  return (
    <RoomWrapper w={props.widthitem}>
      {picture_urls ? (
        <div className="swiper">
          <Carousel afterChange={onChange} dots={false} ref={swiperref}>
            {picture_urls?.map((item, index) => {
              return (
                <img
                  src={item}
                  alt=""
                  key={index}
                  className="img"
                  onClick={godetail}
                />
              )
            })}
          </Carousel>
          <div className="control">
            <div className="left btn" onClick={prepic}>
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="right btn" onClick={nextpic}>
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <div className="indicator">
            <Dots selectindex={selectindex}>
              {picture_urls?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className={classNames('dot', {
                      active: index === selectindex,
                    })}
                  ></span>
                )
              })}
            </Dots>
          </div>
        </div>
      ) : (
        <LazyLoad
          offset={200}
          placeholder={<img width="100%" className="bg"></img>}
        >
          <img src={picture_url} alt="" className="img" />
        </LazyLoad>
      )}

      <div className="desc" style={{ color: verify_info.text_color }}>
        {verify_info.messages.join('·')}
      </div>
      <div className="name">{name}</div>
      <div className="price">{price_format}/晚</div>
      <div className="footer">
        <Rating
          name="half-rating-read"
          defaultValue={star_rating ?? 4}
          precision={0.5}
          sx={{ fontSize: '12px', color: 'red' }}
          readOnly
        />
        <span className="num">{star_rating ?? 4} </span>
        {bottom_info && (
          <span
            style={{
              color: bottom_info?.content_color,
              fontSize: bottom_info?.font_size + 'px',
            }}
          >
            · {bottom_info.content}
          </span>
        )}
      </div>
    </RoomWrapper>
  )
})

export default index
