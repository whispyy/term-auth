import { useState } from 'react'
import { emailRegex, passwordRegex } from '../../common/utils'


const useSignup = () => {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState()

  const isEmailValid = email.length && emailRegex.test(email)
  const validateEmail = () => {
    if (isEmailValid) {
      setEmailSubmitted(true)
    }
  }

  const isPasswordValid = password.length > 8 && passwordRegex.test(password)
  const submit = () => {
    if (isPasswordValid) {
      alert(`signup sent for ${email}`)
    } else {
      setError('error message')
    }
  }

  return {
    emailField: {
      value: email,
      setValue: setEmail,
      isValid: isEmailValid,
      validate: validateEmail,
      submitted: emailSubmitted,
    },
    passwordField: {
      value: password,
      setValue: setPassword,
      isValid: isPasswordValid,
    },
    submit,
    error,
  }
}

export default useSignup