import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  return (
    <div className='loginWrapper'>
      <h1>Login to admin dashboard</h1>
      <input placeholder='username' onChange={(e) => setUsername(e.target.value)}></input>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
    </div>
  )
}

export default Login
