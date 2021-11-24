import {useMount} from 'react-use'

const Demo = () => {
  useMount(() => alert('MOUNTED'))
  return null
}
export default Demo
