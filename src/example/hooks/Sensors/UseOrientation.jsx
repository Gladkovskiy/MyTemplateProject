import {useOrientation} from 'react-use'

const Demo = () => {
  const state = useOrientation()

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}

export default Demo
