import styled from 'styled-components'

export const RoomWrapper = styled.div<{
  w?: string
}>`
  width: ${(props) => props.w || '25%'};
  flex-shrink: 0;
  padding: 8px;
  cursor: pointer;
  box-sizing: border-box;
  .img {
    width: 100%;
    height: 168px;
    object-fit: fill;
  }
  .bg {
    width: 100%;
    height: 168px;
    object-fit: fill;
    background-color: red;
  }
  .swiper {
    position: relative;
    .btn {
      position: absolute;
      top: 50%;
      width: 40px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      visibility: hidden;
      transition: all 100ms ease;
    }
    &:hover .btn {
      visibility: visible;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      ) !important;
    }
    .left {
      left: 0;
      transform: translateY(-50%);
    }
    .right {
      right: 0;
      transform: translateY(-50%);
    }
    .indicator {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 106px;
      overflow: hidden;
      span {
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #ccc;
        margin: 4px;
        border-radius: 50%;
        &.active {
          transform: scale(1.6);
          background-color: #fff;
        }
      }
    }
  }
  .desc {
    font-size: 12px;
  }
  .name {
    font-size: 16px;
    color: ${(prop) => prop.theme.color.textColor};
    font-weight: 800;
    line-height: 1.357rem;
    word-wrap: break-word;
  }
  .price {
    font-size: 14px;
    line-height: 1.2857rem;
    color: ${(prop) => prop.theme.color.textColor};
  }
`
