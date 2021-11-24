import React from 'react'
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap'

const TooltipsExample = () => {
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map(placement => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
    </>
  )
}

export default TooltipsExample
