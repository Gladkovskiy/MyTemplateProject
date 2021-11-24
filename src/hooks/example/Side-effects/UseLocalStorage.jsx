import React from 'react'
import {useLocalStorage} from 'react-use'

const Demo = () => {
  const [value, setValue, remove] = useLocalStorage('my-key', {
    name: 'foo',
    sername: 'Andrey',
  })

  console.log(value)

  return (
    <div>
      <button onClick={() => setValue({...value, name: 'bar'})}>bar</button>
      <button onClick={() => setValue({...value, name: 'baz'})}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  )
}

export default Demo
