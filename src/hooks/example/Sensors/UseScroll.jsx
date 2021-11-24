import {useScroll} from 'react-use'
import {useRef} from 'react'

const Demo = () => {
  const scrollRef = useRef(null)
  const {x, y} = useScroll(scrollRef)

  return (
    <div ref={scrollRef}>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  )
}

export default Demo
