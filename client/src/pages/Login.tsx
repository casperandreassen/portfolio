import axios, { AxiosError, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isLoggedIn, userState } from '../recoil/atoms'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { User } from '../types/types'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import '../styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const setUser = useSetRecoilState(userState)
  const setLoggedIn = useSetRecoilState(isLoggedIn)
  const navigate = useNavigate()

  const handleLogin = () => {
    console.log(email)
    console.log(password)
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
          setLoggedIn(true)
          navigate('/manage')
        }
      })
      .catch((error: AxiosError) => {
        console.log(error)
      })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div className='loginWrapper'>
      <div className='loginContainer'>
        <p>Login to dashboard</p>
        <div className='inputContainer'>
          <TextField
            label='Email'
            id='standard-start-adornment'
            onChange={(e) => setEmail(e.target.value)}
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            variant='outlined'
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>

          <Button onClick={handleLogin} variant='contained'>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
