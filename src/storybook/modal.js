import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '../'

const par = `
  Etiam a metus urnaEtiam a metus urnaEtiam a metus urnaEtiam a metus urnaEtiam a metus urnaEtiam a 
  metus urna.Duis lectus erat, condimentum eget luctus a, pretium at mauris. Etiam a metus urna.
`

storiesOf('Modal', module)
  .addParameters({ component: Modal })
  .add('Default', () => (
    <Modal isOpen >
      Content goes here.
    </Modal>
  ))
  .add('Title and Description', () => (
      <Modal 
        isOpen 
        title="Lorem Ipsum"
        description="Duis lectus erat, condimentum eget luctus a, pretium at mauris. Etiam a metus urna."
      >
        Content goes here.
      </Modal>
  ))
  .add('onClose', () => (
    <Modal
      isOpen
      onClose={() => { }}
      title="Lorem Ipsum"
      description="Add `onClose` prop for onClose button to display."
    >
      Content goes here.
    </Modal>
  ))
  .add('Height and Width props', () => (
    <Modal
      isOpen
      height={400}
      width={400}
    >
      Set height and width props.
    </Modal>
  ))
  .add('Overflowing content', () => (
    <Modal
      isOpen
      onClose={() => {}}
      title="Overflowing content"
      description={par}
    >
      {Array(20).fill().map(() => (
        <p style={{marginBottom: '.5em'}}>{par}</p>
      ))}
    </Modal>
  ))


  
  
