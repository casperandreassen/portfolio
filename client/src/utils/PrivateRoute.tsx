import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'

const PrivateRoutes = () => {
  const [user] = useRecoilState(userState)

  return user ? <Outlet /> : <Navigate to='/manage/login' />
}

export default PrivateRoutes
