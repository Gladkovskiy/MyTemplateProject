import React from 'react'
import {
  Navbar,
  Button,
  Nav,
  Container,
  Dropdown,
  NavDropdown,
} from 'react-bootstrap'
import {
  MAIN_ROUTE,
  COMPONENT_1_ROUTE,
  COMPONENT_2_ROUTE,
  COMPONENT_3_ROUTE,
} from '../utils/const'
import {useMatch, useNavigate, Link} from 'react-router-dom'

const NavbarExample = () => {
  const linkInfo = [
    {path: MAIN_ROUTE, name: 'Главная'},
    {path: COMPONENT_1_ROUTE, name: 'Компонент 1'},
    {path: COMPONENT_2_ROUTE, name: 'Компонент 2'},
    {path: COMPONENT_3_ROUTE, name: 'Компонент 3'},
  ]
  const navigate = useNavigate()
  const Active = path => !!useMatch(path)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3" fixed="top">
      <Container>
        <Link to={MAIN_ROUTE} className="text-light fw-bold ">
          REACT BOOTSTRAP
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {linkInfo.map(({path, name}) => (
              <Nav.Link
                key={path}
                onClick={() => navigate(path)}
                style={{fontFamily: 'Roboto'}}
                active={Active(path)}
              >
                {name}
              </Nav.Link>
            ))}
            <NavDropdown title="Menu" menuVariant="dark">
              {linkInfo.map(({path, name}) => (
                <NavDropdown.Item
                  key={path}
                  onClick={() => navigate(path)}
                  style={{fontFamily: 'Roboto'}}
                  active={Active(path)}
                >
                  {name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* <NavDropdown title="Menu" menuVariant="dark">
          {linkInfo.map(({path, name}) => (
            <NavDropdown.Item
              className="border-0"
              key={path}
              onClick={() => navigate(path)}
              style={{fontFamily: 'Roboto'}}
              active={Active(path)}
            >
              {name}
            </NavDropdown.Item>
          ))}
        </NavDropdown> */}

        {/* <Col>
              <Nav className="ms-auto">
                {linkInfo.map(({path, name}) => (
                  <Button
                    key={path}
                    variant="outline-light"
                    className="ms-3 fw-bold"
                    onClick={() => navigate(path)}
                    disabled={Active(path)}
                    style={{fontFamily: 'Roboto'}}
                  >
                    {name}
                  </Button>
                ))}
              </Nav>
            </Col> */}
      </Container>
    </Navbar>
  )
}

export default NavbarExample
