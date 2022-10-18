import styled from 'styled-components'

export const LongforItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  width: 20%;
  .item {
    width: 100%;
    box-sizing: border-box;
    padding:  8px;
    .img {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .info {
      color: #fff;
      font-weight: 700;
      font-size: 24px;
      position: absolute;
      bottom: 20px;
      left: 50%;
      text-align: center;
      transform: translateX(-50%);
      .price {
        font-size: 16px;
      }
    }
  }
`
