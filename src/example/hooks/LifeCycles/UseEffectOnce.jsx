import {useEffectOnce} from 'react-use'

const Demo = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }
  })

  return null
}

export default Demo
