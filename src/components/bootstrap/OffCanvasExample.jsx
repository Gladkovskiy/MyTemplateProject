import React, {useState} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'

const OffCanvasExample = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        className="bg-secondary text-light"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default OffCanvasExample
