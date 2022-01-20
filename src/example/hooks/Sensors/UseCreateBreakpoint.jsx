import React from 'react'
import {createBreakpoint} from 'react-use'

const useBreakpoint = createBreakpoint()

const Demo = () => {
  const breakpoint = useBreakpoint()

  if (breakpoint === 'laptopL') return <div> This is very big Laptop </div>
  else if (breakpoint === 'laptop') return <div> This is Laptop</div>
  else if (breakpoint === 'tablet') return <div> This is Tablet</div>
  else return <div> Too small!</div>
}

export default Demo

//default --- laptopL: 1440, laptop: 1024, tablet: 768
//custom ---  const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 350 });
