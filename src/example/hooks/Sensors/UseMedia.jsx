import {useMedia} from 'react-use'

const Demo = () => {
  const isWide = useMedia('(min-width: 480px)')

  return <div>Screen is wide: {isWide ? 'Yes' : 'No'}</div>
}

export default Demo
