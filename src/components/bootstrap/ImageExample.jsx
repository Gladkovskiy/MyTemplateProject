import React, {useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import holder from 'holderjs'

const ImageExample = () => {
  useEffect(() => {
    holder.run()
  }, [])

  return (
    <Container>
      <Row className="mb-3 text-center">
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
      <Image src="holder.js/100px250" fluid />
    </Container>
  )
}

export default ImageExample
