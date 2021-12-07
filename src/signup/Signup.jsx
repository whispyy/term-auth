import styled from 'styled-components'
import SignupBox from './SignupBox'

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: dark-grey;
`

const Signup = () => {
  return (
    <Page>
      <SignupBox />
    </Page>
  )
}

export default Signup
