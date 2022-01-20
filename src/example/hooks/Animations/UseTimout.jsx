import React from 'react'
import {useTimeout} from 'react-use'

function TestComponent({msInitial = 5000}) {
  const ms = msInitial
  const [isReady, cancel] = useTimeout(ms)

  return (
    <div>
      {isReady()
        ? "I'm reloaded after timeout"
        : `I will be reloaded after ${ms / 1000}s`}
      {isReady() === false ? <button onClick={cancel}>Cancel</button> : ''}
    </div>
  )
}

const Demo = () => {
  return (
    <div>
      <TestComponent />
      <TestComponent msInitial={10000} />
    </div>
  )
}

export default Demo
