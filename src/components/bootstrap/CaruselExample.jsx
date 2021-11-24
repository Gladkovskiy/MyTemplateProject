import React, {useEffect} from 'react'
import {Carousel, Card} from 'react-bootstrap'
import holder from 'holderjs'

const CaruselExample = () => {
  const caruselOption = [{interval: 1000}, {interval: 500}, {interval: 300}]

  useEffect(() => {
    holder.run()
  }, [])

  return (
    <Card className="w-50 m-auto p-2">
      <Carousel variant="light">
        {caruselOption.map(({interval}, index) => (
          <Carousel.Item key={index} interval={interval}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  )
}

export default CaruselExample
