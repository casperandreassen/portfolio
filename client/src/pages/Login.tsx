import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'
import { User } from '../types/types'

const Login = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()

  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:4500/api/v1/auth/verify',
      withCredentials: true,
    }).then((response: AxiosResponse) => {
      console.log(response)
      if (response.status === 200) {
        setUser(response.data as User)
        navigate('/manage/createProject')
      }
    })
  }, [])

  const handleLogin = () => {
    axios({
      method: 'post',
      url: 'http://localhost:4500/api/v1/auth/login',
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    }).then((response: AxiosResponse) => {
      if (response.status == 200) {
        setUser(response.data as User)
        navigate('/manage/createProject')
      }
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
