import React from 'react'
// import AppRouter from './components/AppRouter'
import {BrowserRouter} from 'react-router-dom'
// import NavBar from './components/NavBar/NavBar'
// import Footer from './components/Footer'
// import {Container} from 'react-bootstrap'
// import useAuthChek from './http/react-query/useAuthChek.js'
import {useFavicon} from 'react-use'
import favicon from './assets/favicon.png'

function App() {
  // useAuthChek()
  useFavicon(favicon)

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* <Container className="p-2" style={{minHeight: '87vh'}}> */}
      {/* <AppRouter /> */}
      {/* </Container> */}
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
