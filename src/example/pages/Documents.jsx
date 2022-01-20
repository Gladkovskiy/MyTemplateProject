import React from 'react'
import {Card, Carousel, Row, Col} from 'react-bootstrap'
import {documents} from '../assets/carusel/documents'
import Helmet from '../components/Helmet'

const Documents = () => {
  return (
    <>
      <Helmet title="Документы" description="Докусенты сети Powernet" />
      <Row>
        <Col md={6} sm xl={4} className="m-auto">
          <Card className="p-1">
            <Carousel variant="dark">
              {documents.map((img, index) => (
                <Carousel.Item
                  key={index}
                  interval="3000"
                  style={{height: '38rem'}}
                >
                  <img
                    className="d-block w-100 h-100"
                    src={img}
                    alt={index + 'slide'}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Documents
