import { useContext } from 'react'
import Page from '../common/Page'
import Button from '../common/Button'
import { pagesMapping, RoutingContext } from '../common/Router'

const Signin = () => {
  const { setPage } = useContext(RoutingContext)

  return (
    <Page>
      <Button onClick={() => setPage(pagesMapping.signup)}>Go to signup</Button>
    </Page>
  )
}

export default Signin
