import React, {useCallback} from 'react'

import {useEvent, useList} from 'react-use'

const Demo = () => {
  const [list, {push, clear}] = useList()

  const onKeyDown = useCallback(({key}) => {
    if (key === 'r') clear()
    push(key)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEvent('keydown', onKeyDown)

  return (
    <div>
      <p>
        Press some keys on your keyboard,{' '}
        <code style={{color: 'tomato'}}>r</code> key resets the list
      </p>
      <pre>{JSON.stringify(list, null, 4)}</pre>
    </div>
  )
}

export default Demo
