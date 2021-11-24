import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import PropTypes from 'prop-types'

const AccordionV2 = ({info, defaultItem, flush}) => {
  return (
    <Accordion defaultActiveKey={defaultItem} flush={flush}>
      {info.map(({header, body}, index) => (
        <Accordion.Item key={header} eventKey={index}>
          <Accordion.Header>{header}</Accordion.Header>
          <Accordion.Body>{body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

AccordionV2.defaultProps = {
  info: [],
  defaultItem: 0,
  flush: false,
}

AccordionV2.propTypes = {
  info: PropTypes.array.isRequired,
  defaultItem: PropTypes.number,
  flush: PropTypes.bool,
}

export default AccordionV2
