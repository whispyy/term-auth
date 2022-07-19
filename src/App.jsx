import { useContext } from 'react'
import { pagesMapping, RoutingContext } from './common/Router'
import Signin from './signin/Signin'
import Signup from './signup/Signup'
import Home from './home/Home'

function App() {
  const { page } = useContext(RoutingContext)

  return (
    <>
      {(pagesMapping.home === page) && <Home />}
      {(pagesMapping.signup === page) && <Signup />}
      {(pagesMapping.signin === page) && <Signin />}
    </>
  )
}

export default App
