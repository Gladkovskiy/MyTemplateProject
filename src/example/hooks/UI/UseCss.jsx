import React from 'react'
import {useCss} from 'react-use'

const Demo = () => {
  const className = useCss({
    color: 'red',
    border: '1px solid red',
    '&:hover': {
      color: 'blue',
    },
  })

  return <div className={className}>Hover me!</div>
}

export default Demo

/* const className = useCss({
    color: 'tomato',
    '&:hover': {
      color: 'orange',
    },
  });
  
  const className = useCss({
    svg: {
      fill: 'tomato',
    },
    '.global_class &:hover svg': {
      fill: 'orange',
    },
  });
  
  const className = useCss({
    color: 'tomato',
    '@media only screen and (max-width: 600px)': {
      color: 'orange',
      '&:hover': {
        color: 'red',
      }
    },
  }); */
