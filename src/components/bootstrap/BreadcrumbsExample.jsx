import React from 'react'
import BreadcrumbV2 from './UI/BreadcrumbV2'
import {MAIN_ROUTE, COMPONENT_1_ROUTE, COMPONENT_2_ROUTE} from '../utils/const'

const BreadcrumbsExample = () => {
  const info = [
    {
      title: 'главная',
      path: MAIN_ROUTE,
    },
    {
      title: 'продукты',
      path: COMPONENT_1_ROUTE,
    },
    {
      title: 'ряженка',
      path: COMPONENT_2_ROUTE,
    },
  ]

  return <BreadcrumbV2 info={info} />
}

export default BreadcrumbsExample
