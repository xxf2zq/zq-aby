import styled from 'styled-components'

export const BrowerPictureWrapper = styled.div<{ showlist: boolean }>`
  position: fixed;
  align-items: center;
  z-index: 9999;
  display: flex;
  align-items: center;
  user-select: none;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #333;
  .close {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .item {
    width: 80px;
    height: 80px;
    cursor: pointer;
    color: #fff;
  }
  .main {
    padding: 0px 240px;
    min-width: 700px;
    flex: 1;
    overflow: hidden;
    .top {
      height: 700px;
      overflow: hidden;
      /* 动画的样式 */
      .pic-enter {
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
      .bigimg {
        width: 100%;
        height: 100%;
        user-select: none;
      }
    }
    .desc {
      color: #fff;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
    .list {
      width: 100%;
      margin-top: 10px;
      overflow: hidden;
      height: ${(props) => (props.showlist ? '67px' : '0px')};
      user-select: none;
      .item {
        width: 67px;
        height: 67px;
        opacity: 0.5;
        margin-right: 8px;
        img {
          width: 100%;
        }
      }
      .active {
        opacity: 1;
      }
      .zq-enter,
      .zq-exit-done,
      .zq-appear {
        opacity: 0;
      }
      .zq-enter-active,
      .zq-appear-active {
        opacity: 1;
        transition: all 200ms ease;
      }
      .zq-exit {
        opacity: 1;
      }
      .zq-exit-active {
        opacity: 0;
        transition: all 300ms ease;
      }
    }
  }
`
