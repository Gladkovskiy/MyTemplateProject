import React from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'
import Spinner from '../components/Spinner'
import Helmet from '../components/Helmet'
import useGetOneUserAuto from '../http/react-query/user/useGetOneUserAuto.js'
import UserStorage from '../store/UserStorage.js'

const PersonalArea = () => {
  const user = useGetOneUserAuto(UserStorage.idUser)

  if (user.isLoading) return <Spinner />

  return (
    <>
      <Helmet
        title="Личный кабинет"
        description="Личный кабинет сети Powernet"
      />

      <Row>
        <Col md={8} sm className="m-auto mt-3">
          <Card className="shadow border-0" bg="light" text="dark">
            <Card.Header className="bg-secondary text-light">
              Личные данные
            </Card.Header>
            <Card.Body>
              <Card.Title>ФИО</Card.Title>
              <Card.Text>{user.data.fio}</Card.Text>
              <hr />
              <Card.Title>Адрес</Card.Title>
              <Card.Text>{user.data.adress}</Card.Text>
              <hr />
              <Card.Title>Тариф</Card.Title>
              <Card.Text>
                {user.data.tariff.name} &nbsp;
                {/* {user.active ? (
                  <span className="text-success">Активен</span>
                ) : (
                  <span className="text-danger">Не активен</span>
                )} */}
              </Card.Text>
              <hr />
              <Card.Title>Счёт</Card.Title>
              <Card.Text>------- грн.</Card.Text>
              <hr />

              <Card.Title>Пополнить счёт</Card.Title>
              <Button variant="outline-primary">Оплатить</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PersonalArea
