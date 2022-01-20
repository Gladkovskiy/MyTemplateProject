import React, {useState} from 'react'
import {Dropdown} from 'react-bootstrap'

const DropdownExample = () => {
  const [value, setValue] = useState('Dropdown Button')
  const dropdownInfo = [
    {value: 1, name: 'Action 1'},
    {value: 2, name: 'Action 2'},
    {value: 3, name: 'Action 3'},
  ]

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">{value}</Dropdown.Toggle>

      <Dropdown.Menu>
        {dropdownInfo.map(({value, name}, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            onClick={() => {
              setValue(value)
            }}
          >
            {name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownExample
