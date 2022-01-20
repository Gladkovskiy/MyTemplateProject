import React from 'react'

import {useRaf} from 'react-use'

const Demo = () => {
  const elapsed = useRaf(5000, 1000)

  return <div>Elapsed: {elapsed}</div>
}

export default Demo
