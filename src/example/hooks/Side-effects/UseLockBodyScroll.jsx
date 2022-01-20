import React from 'react'
import {useLockBodyScroll, useToggle} from 'react-use'

const Demo = () => {
  const [locked, toggleLocked] = useToggle(false)

  useLockBodyScroll(locked)

  return (
    <div>
      <button onClick={() => toggleLocked()}>
        {locked ? 'Unlock' : 'Lock'}
      </button>
    </div>
  )
}

export default Demo
