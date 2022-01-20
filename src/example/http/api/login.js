import {$host, $authHost} from './index'

export const login = async info => {
  const {data} = await $host.post('/login', info)
  return data
}

export const auth = async () => {
  const {data} = await $authHost.get('/login')
  return data
}
