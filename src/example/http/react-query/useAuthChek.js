import {useQuery} from 'react-query'
import {auth} from '../api/login'
import user from '../../store/UserStorage'
import jwt_decode from 'jwt-decode'

const useAuthCheck = () => {
  const query = useQuery('checkAuth', auth, {
    onError(err) {
      localStorage.setItem('token', null)
      user.setIsAuth(false)
    },
    onSuccess(data) {
      localStorage.setItem('token', data.token)
      const decode = jwt_decode(data.token)
      user.setRole(decode.role)
      user.setIsAuth(true)
      user.setId(decode.id)
    },
    onSettled(data, err) {},
    retry: false,
    refetchOnWindowFocus: false,
  })
  return query
}

export default useAuthCheck
