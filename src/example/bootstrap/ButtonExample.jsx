import React, {useState} from 'react'
import {Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

const ButtonExample = () => {
  const [ckeckBoxValue, setCheckBoxValue] = useState([])
  const ckeckBoxInfo = [
    {value: 1, id: 'tbg-btn-1', name: 'Option 1'},
    {value: 2, id: 'tbg-btn-2', name: 'Option 2'},
    {value: 3, id: 'tbg-btn-3', name: 'Option 3'},
  ]

  const [radioValue, setRadioValue] = useState(1)
  const radioInfo = [
    {value: 1, id: 'tbg-radio-1', name: 'Radio 1'},
    {value: 2, id: 'tbg-radio-2', name: 'Radio 2'},
    {value: 3, id: 'tbg-radio-3', name: 'Radio 3'},
  ]

  return (
    <>
      {/* обычные кнопки */}
      <Button variant="outline-primary" size="lg">
        Primary
      </Button>{' '}
      <Button variant="outline-secondary" size="sm">
        Secondary
      </Button>{' '}
      <Button variant="outline-success" disabled>
        Success
      </Button>{' '}
      <Button variant="outline-warning" active>
        Warning
      </Button>{' '}
      <Button variant="outline-danger">Danger</Button>{' '}
      <Button variant="outline-info">Info</Button>{' '}
      <Button variant="outline-light">Light</Button>{' '}
      <Button variant="outline-dark">Dark</Button>
      {/* check box */}
      <div>
        <ToggleButtonGroup
          className="mt-4"
          type="checkbox"
          value={ckeckBoxValue}
          onChange={val => {
            setCheckBoxValue(val)
          }}
        >
          {ckeckBoxInfo.map(({id, value, name}) => (
            <ToggleButton key={id} id={id} value={value}>
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      {/* radio button */}
      <div>
        <ToggleButtonGroup
          className="mt-4"
          type="radio"
          name="options"
          value={radioValue}
          onChange={val => {
            setRadioValue(val)
          }}
        >
          {radioInfo.map(({id, value, name}) => (
            <ToggleButton key={id} id={id} value={value} variant={'success'}>
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    </>
  )
}

export default ButtonExample
