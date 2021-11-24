import {
  MAIN_ROUTE,
  COMPONENT_1_ROUTE,
  COMPONENT_2_ROUTE,
  COMPONENT_3_ROUTE,
} from './utils/const'
import Component1 from './pages/Component_1'
import Component2 from './pages/Component_2'
import Component3 from './pages/Component_3'
import Main from './pages/Main'

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: COMPONENT_1_ROUTE,
    element: <Component1 />,
  },
  {
    path: COMPONENT_2_ROUTE,
    element: <Component2 />,
  },
  {
    path: COMPONENT_3_ROUTE,
    element: <Component3 />,
  },
]
