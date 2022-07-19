import { pagesMapping } from '../common/Router'
import Page from '../common/Page'
import Link from '../common/Link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: white;
`

const Home = () => {
  return (
    <Page>
      <Container>
        <div>
          <Link href={`/${pagesMapping.signup}`}>Sign up</Link>
          &nbsp;|&nbsp; 
          <Link href={`/${pagesMapping.signin}`}>Sign in</Link>
        </div>

        <h1>Welcome</h1>
        <p>
          Please <Link href={`/${pagesMapping.signup}`}>Sign up</Link> or <Link href={`/${pagesMapping.signin}`}>Sign in</Link>
        </p>
      </Container>
    </Page>
  )
}

export default Home
