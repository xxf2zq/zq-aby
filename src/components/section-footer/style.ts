import styled from 'styled-components'

export const SectionFooterWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  span {
    margin-right: 10px;
    font-size: 17px;
    font-weight: 700;
  }
  &:hover {
    text-decoration: underline;
  }
  .active {
    color: #00848a;
  }
`
