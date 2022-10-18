import styled from 'styled-components'

export const CenterWrapper = styled.div`
  width: 300px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 24px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
  cursor: pointer;
  span {
    margin-left: 10px;
  }
  .search {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: ${(prop) => prop.theme.color.primaryColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`
