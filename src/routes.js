import {
  MAIN_ROUTE,
  NEWS_ROUTE,
  ONE_NEWS_ROUTE,
  TARIFFS_ROUTE,
  AGREEMENT_ROUTE,
  DOCUMENTS_ROUTE,
  CONTACTS_ROUTE,
  LOGIN_ROUTE,
  ADMIN_ROUTE,
  PERSONAL_AREA_ROUTE,
} from './utils/const'

import Main from './pages/Main'
import News from './pages/News'
import OneNews from './pages/OneNews'
import Tariffs from './pages/Tariffs'
import Agreement from './pages/Agreement'
import Documents from './pages/Documents'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import Admin from './pages/Admin'
import PersonalArea from './pages/PersonalArea'

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <Main />,
  },
  {
    path: NEWS_ROUTE,
    element: <News />,
  },
  {
    path: ONE_NEWS_ROUTE,
    element: <OneNews />,
  },
  {
    path: TARIFFS_ROUTE,
    element: <Tariffs />,
  },
  {
    path: AGREEMENT_ROUTE,
    element: <Agreement />,
  },
  {
    path: DOCUMENTS_ROUTE,
    element: <Documents />,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Login />,
  },
]

export const authRotes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: PERSONAL_AREA_ROUTE,
    element: <PersonalArea />,
  },
]

export const navbarInfo = [
  {path: MAIN_ROUTE, name: 'Головна'},
  {path: NEWS_ROUTE, name: 'Новини'},
  {path: TARIFFS_ROUTE, name: 'Тарифи'},
  {path: AGREEMENT_ROUTE, name: 'Договір'},
  {path: DOCUMENTS_ROUTE, name: 'Документи'},
  {path: CONTACTS_ROUTE, name: 'Контакти'},
]
