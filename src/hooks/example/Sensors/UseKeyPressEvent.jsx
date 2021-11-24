import React, {useState} from 'react'
import {useKeyPressEvent} from 'react-use'

const Demo = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count => ++count)
  const decrement = () => setCount(count => --count)
  const reset = () => setCount(count => 0)

  useKeyPressEvent(']', increment, increment)
  useKeyPressEvent('[', decrement, decrement)
  useKeyPressEvent('r', reset)

  return (
    <div>
      <p>
        Try pressing <code>[</code>, <code>]</code>, and <code>r</code> to see
        the count incremented and decremented.
      </p>
      <p>Count: {count}</p>
    </div>
  )
}

export default Demo

/* useKeyPressEvent('<key>', keydown);
useKeyPressEvent('<key>', keydown, keyup);
useKeyPressEvent('<key>', keydown, keyup, useKeyPress); */
