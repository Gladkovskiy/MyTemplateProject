import {$host, $authHost} from './index'

export const addUser = async info => {
  const {data} = await $authHost.post('/user', info)
  return data
}

export const getOneUser = async id => {
  const {data} = await $host.get(`/user/search/${id}`)
  return data
}

export const getOneUserForId = async id => {
  const {data} = await $host.get(`/user/${id}`)
  return data
}

export const getAllUser = async ipOrName => {
  const {data} = await $host.get(`/user`, {params: {ipOrName}})
  return data
}

export const putUser = async info => {
  const {data} = await $authHost.put('/user', info)
  return data
}

export const deleteUser = async id => {
  const {data} = await $authHost.delete('/user', {params: id})
  return data
}
