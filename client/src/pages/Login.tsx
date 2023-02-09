import axios, { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isLoggedIn, userState } from '../recoil/atoms'
import { User } from '../types/types'

const Login = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const setUser = useSetRecoilState(userState)
  const setLoggedIn = useSetRecoilState(isLoggedIn)
  const navigate = useNavigate()

  const handleLogin = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:4500/api/v1/auth/login',
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((response: AxiosResponse) => {
        if (response.status == 200) {
          console.log(response.data)
          setUser(response.data as User)
          setLoggedIn('true')
          localStorage.setItem('isLoggedIn', 'true')
          navigate('/manage')
        }
      })
      .catch((error: AxiosError) => {
        console.log(error)
      })
  }

  return (
    <div className='loginWrapper'>
      <h1>Login to admin dashboard</h1>
      <input placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
      <input placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
