import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  title: yup.string().required('Обязательно'),
  text: yup.string().required('Обязательно'),
  img: yup
    .mixed()
    .required('Обязательно')
    .test('fileType', 'Не поддержуемый тип файла', value => {
      const SUPPORTED_FORMATS = [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/webp',
      ]
      return value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    })
    .test(
      'fileSize',
      'Файл сильно большой <1Mb',
      value => value === null || (value && value.size <= 1000000)
    ),
})

export const init = {
  title: '',
  text: '',
  img: null,
}
