import React from 'react'
import { useField } from '../hooks/useField'

const LoginForm = ({ handleLoginUser }) => {

  const email = useField('email')
  const password = useField('password')

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    handleLoginUser({
      email: email.value,
      password: password.value
    })
    email.clearValue()
    password.clearValue()
  } 

  return (
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input {...email} placeholder='email'/>
        </div>
        <div>
          <input {...password} placeholder='password'/> 
        </div>
        <button type='submit'>Login</button>
      </form>
  )
}

export default LoginForm