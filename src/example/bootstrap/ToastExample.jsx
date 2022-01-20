import React, {useEffect, useState} from 'react'
import holder from 'holderjs'
import {Button, Toast} from 'react-bootstrap'

const ToastExample = () => {
  const [showA, setShowA] = useState(true)
  const toggleShowA = () => setShowA(!showA)
  useEffect(() => {
    holder.run()
  }, [])

  return (
    <div className="mt-2">
      <Button onClick={toggleShowA} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </Button>
      <Toast show={showA} onClose={toggleShowA} bg="info">
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </div>
  )
}

export default ToastExample
