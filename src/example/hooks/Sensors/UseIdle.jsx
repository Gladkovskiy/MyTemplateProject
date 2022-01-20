import {useIdle} from 'react-use'

const Demo = () => {
  const isIdle = useIdle(3e3)

  return (
    <div>
      <div>User is idle: {isIdle ? 'Yes ' : 'Nope'}</div>
    </div>
  )
}

export default Demo
