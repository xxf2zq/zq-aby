import styled from 'styled-components'

export const DetailPictureWrapper = styled.div`
  .pictures {
    display: flex;
    position: relative;
    .left {
      width: 50%;
      overflow: hidden;
      position: relative;
      &:hover .cover {
        opacity: 0;
        display: none;
      }
      img {
        width: 100%;
        vertical-align: top;
        cursor: pointer;
        transition: all 250ms ease;
        &:hover {
          transform: scale(1.2);
          opacity: 1;
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      box-sizing: border-box;
      .item {
        width: 50%;
        overflow: hidden;
        border: 1px solid #000;
        position: relative;
        &:hover .cover {
          opacity: 0;
          display: none;
        }
        img {
          width: 100%;
          vertical-align: top;
          height: 100%;
          cursor: pointer;
          transition: transform 250ms ease;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
    .check {
      position: absolute;
      bottom: 20px;
      right: 40px;
    }
  }
`
