import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Offer from '../components/Offer'
import StartNews from '../components/StartNews'
import Helmet from '../components/Helmet'

const Main = () => {
  return (
    <>
      <Helmet title="Главная" description="Компьютерная сеть POWERNET" />
      <Row>
        <Col
          sm={{order: 2}}
          className="position-relative"
          style={{minHeight: '60vh'}}
        >
          <StartNews />
        </Col>
        <Col sm={{span: 4, order: 1}}>
          <Offer />
        </Col>
      </Row>
    </>
  )
}

export default Main
