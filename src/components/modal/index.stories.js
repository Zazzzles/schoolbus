import React, { useState } from 'react'
import Modal from './'
import Flex from '../flex'
import Button from '../button'

export default {
  title: 'Containers & Wrappers/ Modal',
  component: Modal,
}

const DEFAULT_WIDTH = '50em'

export const Base = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  return <>
    <Button onClick={toggle}>Open modal</Button>
    <Modal isOpen={isOpen} onClose={toggle} width={DEFAULT_WIDTH}>  
      Content goes here.
    </Modal>
  </>
}

export const OtherExamples = () => {
  const [currentModal, setCurrentOpenModal] = useState(null)
  const toggleModal = modalNumber => setCurrentOpenModal(
      currentModal === modalNumber ?  null : modalNumber
  )

  const createDefaultProps = modalKey => ({
    isOpen: currentModal === modalKey,
    onClose: () => toggleModal(modalKey),
    title: 'This is the title',
    width: DEFAULT_WIDTH
  })

  return (
    <Flex flexDirection='column'>
      <Button m='1em' onClick={() => toggleModal(1)}>Modal with description</Button>
      <Modal
        {...createDefaultProps(1)}
        description='This is the description. Duis lectus erat, condimentum eget luctus a, pretium at mauris. Etiam a metus urna.'
      />
      
      <Button m='1em' onClick={() => toggleModal(2)}>Modal with subtitle</Button>
      <Modal
        {...createDefaultProps(2)}
        description='This is the description'
        subtitle='This is the subtitle'
      />

      <Button m='1em' onClick={() => toggleModal(3)}>Modal with proximusTitle</Button>
      <Modal
        {...createDefaultProps(3)}
        proximusTitle='This is the proximus title'
      />

      <Button m='1em' onClick={() => toggleModal(4)}>Modal with footer</Button>
      <Modal
        {...createDefaultProps(4)}
        footer={(
          <Button variant='primary' onClick={console.log}>
            This is a button in the footer
          </Button>
        )}
      />

      <Button m='1em' onClick={() => toggleModal(5)}>Modal with centerTitle</Button>
      <Modal
        {...createDefaultProps(5)}
        centerTitle
      />
    </Flex>
  )
}