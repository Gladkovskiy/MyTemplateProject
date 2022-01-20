import React from 'react'
import {Card} from 'react-bootstrap'
import Helmet from '../components/Helmet'

const Contacts = () => {
  return (
    <>
      <Helmet title="Контакты" description="Контакты сети Powernet" />

      <Card className="shadow border-0" bg="light" text="dark">
        <Card.Header>
          Товариство з обмеженою відповідальністю «Повернет»
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <strong>Банкiвськi реквiзити:</strong>
          </Card.Title>
          <Card.Text>
            IBAN: UA443355480000026007053605703 в КФ КБ «Приватбанку» у м.
            Краматорськ <br /> код ЄДРПОУ 38491725
          </Card.Text>
          <hr />
          <Card.Title>
            <strong>Телефон служби технічної підтримки абонентів:</strong>
          </Card.Title>
          <Card.Text>
            <a href="tel: +380994377189">(099) 43-77-189</a>,{' '}
            <a href="tel: +380934349625 ">(093) 434-96-25 </a>
          </Card.Text>
          <hr />
          <Card.Title>
            <strong>Режим роботи:</strong>
          </Card.Title>
          <Card.Text>
            З понеділка по пятницю з 9.00 до 21.00, субота с 9:00 до 19:00
          </Card.Text>
          <hr />
          <Card.Title>
            <strong>Адрес офиса:</strong>
          </Card.Title>
          <Card.Text>
            ул. Я. Мудрого (XIX Партсъезда) 70 офис № 6 (вход в офисные
            помещения со стороны агентства недвижимости "Кобзарь")
          </Card.Text>

          <Card.Title>
            <strong>График работы офиса:</strong>
          </Card.Title>
          <Card.Text>
            З понеділка по пятницю з 9.00 до 17.00, субота-недiля вихiднi
          </Card.Text>
          <hr />
          <Card.Title>
            <strong>E-mail:</strong>
          </Card.Title>
          <Card.Text>
            <a href="mailto:powernet@krm.dn.ua">powernet@krm.dn.ua</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Contacts
