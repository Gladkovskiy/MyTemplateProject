import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'

const TabsExample = () => {
  return (
    <Tabs defaultActiveKey="profile" className="mb-3">
      <Tab eventKey="home" title="Home">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea velit
          reprehenderit, est facilis optio iure magnam maxime deleniti! Eveniet
          iste non ipsa quia nulla tempore consequatur nobis mollitia dolorem
          optio.
        </p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea velit
          reprehenderit, est facilis optio iure magnam maxime deleniti! Eveniet
          iste non ipsa quia nulla tempore consequatur nobis mollitia dolorem
          optio.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
          velit reprehenderit, est facilis optio iure magnam maxime deleniti!
          Eveniet iste non ipsa quia nulla tempore consequatur nobis mollitia
          dolorem optio.
        </p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea velit
          reprehenderit, est facilis optio iure magnam maxime deleniti! Eveniet
          iste non ipsa quia nulla tempore consequatur nobis mollitia dolorem
          optio.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
          velit reprehenderit, est facilis optio iure magnam maxime deleniti!
          Eveniet iste non ipsa quia nulla tempore consequatur nobis mollitia
          dolorem optio.
        </p>
      </Tab>
    </Tabs>
  )
}

export default TabsExample
