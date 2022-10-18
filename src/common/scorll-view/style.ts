import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  position: relative;
  width: 100%;
  .contain {
    overflow: hidden;
    .scroll {
      display: flex;
      transition: transform 200ms ease;
      margin: 0px -8px;
    }
  }
  .left {
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    z-index: 6;
    justify-content: center;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.18);
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-weight: 700;
  }
  .right {
    position: absolute;
    z-index: 9999;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    z-index: 999;
    justify-content: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.18);
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-weight: 700;
  }
`
