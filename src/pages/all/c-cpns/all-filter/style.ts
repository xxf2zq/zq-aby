import styled from 'styled-components'
export const AllFilterWrapper = styled.div`
  display: flex;
  margin-left: 20px;
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
