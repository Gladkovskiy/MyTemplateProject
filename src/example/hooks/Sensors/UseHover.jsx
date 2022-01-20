import React, {useRef} from 'react'

import {useHover, useHoverDirty} from 'react-use'

const Demo = () => {
  const element = hovered => <div>Hover me! {hovered && 'Thanks!'}</div>
  const [hoverable, hovered] = useHover(element)

  const ref = useRef()
  const isHovering = useHoverDirty(ref)

  return (
    <div ref={ref}>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
      <div>{isHovering && 'Пример с HoverDirty'}</div>
    </div>
  )
}

export default Demo
