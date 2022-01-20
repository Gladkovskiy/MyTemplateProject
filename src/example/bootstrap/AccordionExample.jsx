import React from 'react'
import Accordion from './UI/AccordionV2'

const AccordionExample = () => {
  const info = [
    {
      header: 'Title1',
      body: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          perspiciatis ab amet pariatur commodi. Excepturi repudiandae esse,cum
          minus tempora voluptatum deleniti impedit perferendis exercitationem
          enim, explicabo quod asperiores nemo. <br /> Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Fugit perspiciatis ab amet
          pariatur commodi. Excepturi repudiandae esse,cum minus tempora
          voluptatum deleniti impedit perferendis exercitationem enim, explicabo
          quod asperiores nemo.
        </p>
      ),
    },
    {
      header: 'Title2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit perspiciatis ab amet pariatur commodi. Excepturi repudiandae esse, cum minus tempora voluptatum deleniti impedit perferendis exercitationem enim, explicabo quod asperiores nemo.',
    },
    {
      header: 'Title3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit perspiciatis ab amet pariatur commodi. Excepturi repudiandae esse, cum minus tempora voluptatum deleniti impedit perferendis exercitationem enim, explicabo quod asperiores nemo.',
    },
  ]
  return <Accordion info={info} flush={true} defaultItem={1} />
}

export default AccordionExample
