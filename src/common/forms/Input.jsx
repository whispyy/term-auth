import styled from 'styled-components'
import ArrowIcon from './ArrowIcon'

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
`

const StyledInput = styled.input`
  background: none;
  border: none;
  outline: none;

  color: white;
  font-weight: 700;
  height: 16px;
`

const Input = ({ ...props }) => (
  <Wrapper>
    <ArrowIcon />
    <StyledInput {...props} />
  </Wrapper>
)

export default Input
