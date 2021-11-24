import {useClickAway} from 'react-use'
import React, {useRef} from 'react'

const Demo = () => {
  const ref = useRef(null)

  useClickAway(ref, () => {
    console.log('OUTSIDE CLICKED')
  })

  return (
    <div
      ref={ref}
      style={{
        width: 200,
        height: 200,
        background: 'red',
      }}
    />
  )
}

export default Demo
