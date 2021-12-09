import { useContext } from 'react'
import { pagesMapping, RoutingContext } from './common/Router'
import Signin from './signin/Signin'
import Signup from './signup/Signup'

function App() {
  const { page } = useContext(RoutingContext)

  return (
    <>
      {(pagesMapping.signup === page) && <Signup />}
      {(pagesMapping.signin === page) && <Signin />}
    </>
  )
}

export default App
