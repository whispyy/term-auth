import styled from 'styled-components'
import { useState } from 'react'
import Button from '../common/Button'
import ContainerBox from '../common/ContainerBox'
import Field from '../common/forms/Field'

const Text = styled.p`
  line-height: 1.5;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

const Signup = () => {
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState('')

  const validateEmail = () => {
    if (email.length) {
      setEmailValid(true)
    }
  }
  const submit = () => {
    if (password.length > 8) {
      console.log(email, password)
    }
  }

  return (
    <ContainerBox>
      <Text>
        Welcome to terminal chat! <br />
        It's easy to get in. Just follow the instructions.
      </Text>
      
      <Row>
        <Field
          id="email"
          labelText="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && validateEmail()}
        />
        {!emailValid &&
          <ButtonContainer>
            <Button
              type="button"
              onClick={validateEmail}
              disabled={!email.length}
            >
              Continue
            </Button>
          </ButtonContainer>
        }
      </Row>

      {emailValid &&
        <Row>
          <Field
            id="password"
            labelText="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
          <ButtonContainer>
            <Button
              type="button"
              onClick={submit}
              disabled={password.length < 8}
            >
              Submit
            </Button>
          </ButtonContainer>
        </Row>
      }
    </ContainerBox>
  )
}

export default Signup
