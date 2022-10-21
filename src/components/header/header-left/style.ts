import styled from 'styled-components'

export const LeftWrapper = styled.div`
  margin-left: 30px;
  color: ${(props) => (props.theme.isAlpha ? '#fff' : 'red')};
  flex: 1;
`
