import styled from 'styled-components'
import { Colors, Metrics } from '../common/theme'

const Container = styled.div`
  margin-right: ${Metrics.xlarge}px;
  padding: ${Metrics.medium}px 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: ${Colors.disabled};
`

const Text = styled.span`
  margin-right: ${Metrics.small}px;

  @media (max-width: 480px) {
    display: none;
  }
`

const Link = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`


const HeaderLink = () => {
  return (
    <Container>
      <Text>Have an account?</Text>
      <Link href="/signin">Sign in</Link>
    </Container>
  )
}

export default HeaderLink