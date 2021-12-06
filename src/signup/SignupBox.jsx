import styled from 'styled-components'
import { useState } from 'react'
import Button from '../common/Button'
import ContainerBox from '../common/ContainerBox'
import Field from '../common/forms/Field'

const Text = styled.p`
  line-height: 1.5;
`

const Signup = () => {
  const [count, setCount] = useState(0)

  return (
    <ContainerBox>
      <Text>
        Welcome to terminal chat! <br />
        It's easy to get in. Just follow the instructions.
      </Text>

      <Field label="Enter your email" />

      <Button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </Button>
    </ContainerBox>
  )
}

export default Signup
