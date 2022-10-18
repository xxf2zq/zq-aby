import styled from 'styled-components'

export const RightWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 20px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.color.textColor};
  .btns {
    display: flex;
    align-items: center;
    .item {
      cursor: pointer;
      padding: 12px;
      border-radius: 50%;
      background-color: transparent;
      transition: color 250ms ease;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
  .profile {
    display: flex;
    align-items: center;
    width: 60px;
    justify-content: space-around;
    padding: 5px 5px 5px 12px;
    border: 1px solid #ddd;
    border-radius: 21px;
    cursor: pointer;
    ${(prop) => prop.theme.mixin.boxShadow}
  }
  .panal {
    position: absolute;
    top: 60px;
    right: 10px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid #ddd;
    padding: 10px 0px;
    z-index: 9;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);
    .top {
      border-bottom: 1px solid #ccc;
    }
    .item {
      padding: 10px;

      cursor: pointer;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }
`
