import React, {useEffect} from 'react'
import {Card, Button, Row, Col, CloseButton} from 'react-bootstrap'
import holder from 'holderjs'

const CardExample = () => {
  const cardOption = [
    {bg: '', border: '', text: ''},
    {bg: 'success', border: 'danger', text: ''},
    {bg: 'dark', border: 'info', text: 'light'},
    {bg: 'warning', border: 'secondary', text: ''},
  ]

  useEffect(() => {
    holder.run()
  }, [])

  return (
    <Row>
      {cardOption.map(({bg, border, text}, index) => (
        <Col md={3} key={index}>
          <Card className="mt-4 shadow" bg={bg} border={border} text={text}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              <CloseButton
                style={{position: 'absolute', top: '2%', left: '90%'}}
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardExample
