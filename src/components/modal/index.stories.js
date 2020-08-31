import React from 'react'
import Modal from './'
import Button from '../button'

const par = `
  Etiam a metus urnaEtiam a metus urnaEtiam a metus urnaEtiam a metus urnaEtiam a metus urnaEtiam a 
  metus urna.Duis lectus erat, condimentum eget luctus a, pretium at mauris. Etiam a metus urna.
`

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => <Modal isOpen>Content goes here.</Modal>

export const ProximusTitle = () => (
  <Modal
    isOpen
    title='Regular title'
    proximusTitle='Proximus title'
    description='Duis lectus erat, condimentum eget luctus a, pretium at mauris. Etiam a metus urna.'
  >
    Content goes here.
  </Modal>
)

export const Footer = () => (
  <Modal
    isOpen
    onClose={() => {}}
    title='Overflowing content'
    footer={<Button variant='primary'>Footer content here</Button>}
  >
    {Array(20)
      .fill()
      .map(() => (
        <p style={{ marginBottom: '.5em' }}>{par}</p>
      ))}
  </Modal>
)
