import React from 'react'
import {ListGroup} from 'react-bootstrap'

const ListItemExample = () => {
  const listInfo = [
    {variant: '', name: 'No style'},
    {variant: 'primary', name: 'Primary'},
    {variant: 'secondary', name: 'Secondary'},
    {variant: 'success', name: 'success'},
    {variant: 'danger', name: 'danger'},
  ]
  return (
    <ListGroup className="w-50 m-auto">
      {listInfo.map(({variant, name}, index) => (
        <ListGroup.Item key={index} variant={variant}>
          {name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default ListItemExample
