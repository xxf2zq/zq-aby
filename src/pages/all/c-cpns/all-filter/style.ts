import styled from 'styled-components'
export const AllFilterWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 80;
  right: 0;
  z-index: 99;
  display: flex;
  margin-left: 20px;
  background-color: #fff;
  margin-bottom: 10px;
  .item {
    padding: 10px 12px;
    border: 1px solid #ddd;
    margin: 0px 6px;
    border-radius: 6px;
    cursor: pointer;
    &.active {
      background-color: #000048;
      color: #fff;
    }
  }
`
