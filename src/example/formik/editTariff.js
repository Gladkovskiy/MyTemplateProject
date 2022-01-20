import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().required('Обязательно'),
  price: yup.string().required('Обязательно'),
  connectionPrice: yup.string().required('Обязательно'),
  speed: yup.string().required('Обязательно'),
})

export const init = info => {
  return {...info}
}
