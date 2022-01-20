import {useUnmount} from 'react-use'

const Demo = () => {
  useUnmount(() => alert('UNMOUNTED'))
  return null
}

export default Demo
