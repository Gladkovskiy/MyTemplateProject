import React, {useRef} from 'react'
import {useSlider} from 'react-use'

const Demo = () => {
  const ref = useRef(null)

  const {isSliding, value, pos} = useSlider(ref)

  return (
    <div>
      <div ref={ref} style={{position: 'relative'}}>
        <p style={{textAlign: 'center', color: isSliding ? 'red' : 'green'}}>
          {Math.round(value * 100)}%
        </p>
        <div style={{position: 'absolute', left: pos}}>111111</div>
      </div>
    </div>
  )
}

export default Demo
