import styled from 'styled-components'

export const TabsWrapper = styled.div`
  margin-top: 10px;
  .item {
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 3px;
    border: 0.5px solid #ccc;
    padding: 0px 10px;
    min-width: 120px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-right: 16px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    box-sizing: border-box;
    ${(props) => props.theme.mixin.boxShadow}
    &.active {
      background-color: #00848a;
      color: #fff;
    }
  }
`
