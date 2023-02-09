import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import '../styles/manage.css'
import React, { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { isLoggedIn, userState } from '../recoil/atoms'
import { User } from '../types/types'
import axios, { AxiosError, AxiosResponse } from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { Logout } from '@mui/icons-material'

const activeStyle = {
  borderBottom: '2px solid #28DF99',
  textDecoration: 'none',
  color: 'black',
}

const deactiveStyle = {
  borderBottom: '2px solid #E1E5EA',
  textDecoration: 'none',
  color: 'black',
}

const Manage = () => {
  const [user, setUser] = useRecoilState(userState)
  const setLoggedIn = useSetRecoilState(isLoggedIn)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const location = useLocation()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
          setLoggedIn(false)
          navigate('/login')
        })
    }
  }, [])

  const signOut = () => {
    axios({
      method: 'POST',
      url: 'http://localhost:4500/api/v1/auth/signout',
      withCredentials: true,
    }).then((response: AxiosResponse) => {
      if (response.status === 200) {
        setUser(null)
        setLoggedIn(false)
      }
    })
  }

  return (
    <div className='manageApp'>
      <div className='manageHeader'>
        <div className='navLinks'>
          <Link
            style={location.pathname.includes('/projects') ? activeStyle : deactiveStyle}
            to='/manage/projects'
          >
            Projects
          </Link>
          <Link
            style={location.pathname.includes('/assets') ? activeStyle : deactiveStyle}
            to='/manage/assets'
          >
            Assets
          </Link>
        </div>
        <div className='userDropdown'>
          <IconButton onClick={handleClick}>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 23,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={signOut}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Manage
