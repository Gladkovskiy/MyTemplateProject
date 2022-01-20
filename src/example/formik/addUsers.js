import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  fio: yup.string().required('Обязательно'),
  adress: yup.string().required('Обязательно'),
  ip: yup.string().required('Обязательно'),
  login: yup.string().required('Обязательно'),
  password: yup.string().required('Обязательно'),
})

export const init = (roleId, tariffId) => {
  return {
    fio: '',
    adress: '',
    ip: '',
    login: '',
    password: '',
    roleId,
    tariffId,
    active: true,
  }
}
