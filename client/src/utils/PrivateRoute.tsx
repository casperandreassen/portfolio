import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Manage from '../layouts/Manage'
import { isLoggedIn } from '../recoil/atoms'

const PrivateRoutes = () => {
  const LoggedIn = useRecoilValue(isLoggedIn)

  return LoggedIn ? <Manage /> : <Navigate to='/login' />
}

export default PrivateRoutes
