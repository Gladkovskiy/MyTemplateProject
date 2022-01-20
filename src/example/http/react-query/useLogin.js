import {useMutation} from 'react-query'
import {login} from '../api/login'
import user from '../../store/UserStorage'
import jwt_decode from 'jwt-decode'

const useLogin = () => {
  const mutate = useMutation(login, {
    onMutate(vars) {
      //   console.log('onMutate:', vars)
      //можно return и пробрасывать контекст в следющие onError, onSuccess, onSettled
    },
    onError(error, vars, context) {
      // console.log(error.response.data.message)
      //   console.log('onError:', error, vars, context)
      localStorage.setItem('token', null)
    },
    onSuccess(data, vars, context) {
      //   client.invalidateQueries('deviceType')
      //обновление get запроса
      //   console.log('onSuccess:', data, vars, context)
      localStorage.setItem('token', data.token)
      const decode = jwt_decode(data.token)
      user.setRole(decode.role)
      user.setIsAuth(true)
      user.setId(decode.id)
    },
    onSettled(data, error, vars, context) {
      //   console.log('onSettled:', data, error, vars, context)
    },
  })
  return mutate
}

export default useLogin
