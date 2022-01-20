import {useScrolling} from 'react-use'
import {useRef} from 'react'

const Demo = () => {
  const scrollRef = useRef(null)
  const scrolling = useScrolling(scrollRef)

  return (
    <div ref={scrollRef}>
      {<div>{scrolling ? 'Scrolling' : 'Not scrolling'}</div>}
    </div>
  )
}

export default Demo
