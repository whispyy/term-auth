import { useState } from 'react'
import Button from './common/Button'
import ContainerBox from './common/ContainerBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ background: 'darkGrey' }}>
      <ContainerBox>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>Hello Vite + React!</p>
        <p>
          <Button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </ContainerBox>
    </div>
  )
}

export default App
