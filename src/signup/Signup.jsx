import Page from '../common/Page'
import SignupBox from './SignupBox'
import HeaderLink from '../common/HeaderLink'

const Signup = () => {
  return (
    <Page>
      <HeaderLink prefixText="Have an account?" href="/signin" linkText="Sign in" />
      <SignupBox />
    </Page>
  )
}

export default Signup
