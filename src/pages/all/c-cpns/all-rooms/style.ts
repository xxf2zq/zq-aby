import styled from 'styled-components'

export const AllRoomsWrapper = styled.div`
  padding: 20px;
  position: relative;
  margin-top: 80px;
  h2 {
    margin-top: 20px;
    margin-left: 20px;
    font-weight: 700;
    font-size: 22px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.4);
  }
`
