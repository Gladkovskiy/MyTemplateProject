import React from 'react'
import PropTypes from 'prop-types'
import {Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const BreadcrumbV2 = ({info}) => {
  return (
    <Breadcrumb>
      {info.map(({path, title}) => (
        <Breadcrumb.Item key={title} linkAs="span">
          <Link to={path}>{title}</Link>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}

BreadcrumbV2.defaultPops = {
  info: [],
}

BreadcrumbV2.propTypes = {
  info: PropTypes.array,
}

export default BreadcrumbV2
