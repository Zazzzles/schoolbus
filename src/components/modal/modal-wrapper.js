import React from 'react'
import ReactModal from 'react-modal'

const ModalWrapper = ({
  isOpen,
  contentLabel,
  onRequestClose,
  closeTimeoutMS,
  style,
  children,
}) => {
  const modalStyleOverride = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      top: 'unset',
      left: 'unset',
      right: 'unset',
      bottom: 'unset',
      borderRadius: '1em',
      padding: '2em',
      overflow: 'visible',
      ...style,
    },
  }

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS}
      style={modalStyleOverride}
    >
      {children}
    </ReactModal>
  )
}

ModalWrapper.defaultProps = {
  isOpen: false,
  contentLabel: '',
  onRequestClose: () => {},
  closeTimeoutMS: 300,
  style: {},
}

ReactModal.setAppElement('body')

export default ModalWrapper
