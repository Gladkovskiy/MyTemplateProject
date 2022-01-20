import React from 'react'
import {ProgressBar} from 'react-bootstrap'

const ProgressbarExample = () => {
  const now = 60
  return (
    <ProgressBar animated now={now} label={`${now}%`} className="w-50 m-auto" />
  )
}

export default ProgressbarExample
