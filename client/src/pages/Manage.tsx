import { Link, Outlet, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import '../styles/manage.css'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isLoggedIn, userState } from '../recoil/atoms'
import { User } from '../types/types'
import axios, { AxiosError, AxiosResponse } from 'axios'

const Manage = () => {
  const [user, setUser] = useRecoilState(userState)
  const setLoggedIn = useSetRecoilState(isLoggedIn)
  const navigate = useNavigate()

  useEffect(() => {
    if (user == null) {
      axios({
        method: 'POST',
        url: 'http://localhost:4500/api/v1/auth/verify',
        withCredentials: true,
      })
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            console.log(response.data)
            setUser(response.data as User)
          }
        })
        .catch((error: AxiosError) => {
          setLoggedIn('false')
          localStorage.removeItem('isLoggedIn')
          navigate('/login')
          console.log(error)
        })
    }
  }, [])
  return (
    <>
      <div className='manageHeader'>
        <div>
          <Link to='/manage/projects'>Manage projects</Link>
          <Link to='/manage/assets'>Manage assets</Link>
        </div>
        <div>
          <p>{user?.firstName}</p>
          <Button variant='contained'>Sign out</Button>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Manage
