import React, {useState} from 'react'
import {Card, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {MAIN_ROUTE} from '../utils/const'
import useLogin from '../http/react-query/useLogin.js'
import Helmet from '../components/Helmet'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const loginMutation = useLogin()

  const confirmLogin = e => {
    e.preventDefault()
    loginMutation
      .mutateAsync({login, password})
      .then(() => navigate(MAIN_ROUTE))
  }

  return (
    <>
      <Helmet title="Логин" description="Powernet" />

      <Row>
        <Col md={6} xl={5} sm className="m-auto mt-5">
          <Card className="shadow border-0">
            <Card.Header className="mb-1 p-3 bg-secondary text-light">
              Aвторизация
            </Card.Header>
            <Card.Body>
              <Form>
                <FloatingLabel label="Login" className="mb-1">
                  <Form.Control
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={({target: {value}}) => setLogin(value)}
                  />
                </FloatingLabel>

                <FloatingLabel label="Password" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({target: {value}}) => setPassword(value)}
                  />
                </FloatingLabel>

                <div className="d-flex justify-content-end align-items-center">
                  {loginMutation.isError && (
                    <span className="text-danger me-5">
                      {loginMutation.error.response.data.message}
                    </span>
                  )}
                  <Button
                    variant="outline-dark"
                    type="submit"
                    onClick={confirmLogin}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Login
