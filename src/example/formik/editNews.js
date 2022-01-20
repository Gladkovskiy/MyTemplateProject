import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  title: yup.string().required('Обязательно'),
  text: yup.string().required('Обязательно'),
})

export const init = (text, title) => {
  return {
    title,
    text,
  }
}
