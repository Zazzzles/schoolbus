import React from 'react'
import ReactModal from 'react-modal'

import Flex from '../flex'
import IconButton from '../icon-button'

import { Header, Title, Description, styleOverrides } from './styles'

ReactModal.setAppElement('body')

const ModalWrapper = ({
  onClose,
  style,
  children,
  width,
  height,
  title,
  description,
  ...otherProps
}) => {

  const modalStyles = {
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
      overflow: 'auto',
      maxWidth: '95vw',
      maxHeight: '95vh',
      width,
      height,
      ...style
    }
  }

  const renderCloseIcon = () => (
    <IconButton 
      icon="close" 
      noShadow 
      color="white" 
      style={styleOverrides.closeBtn}
      onClick={onClose}
    />
  )

  const hasHeader = !!title || !!description

  return (
    <ReactModal
      onRequestClose={onClose}
      style={modalStyles}
      {...otherProps}
    >
      <>
        {onClose && renderCloseIcon()}

        {hasHeader && (
          <Header>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </Header>
        )}
        

        <Flex 
          p="0 1em" 
          m="0 -1em" 
          mt={hasHeader ? '2em' : '0'} 
          style={styleOverrides.content}
          flexDirection="column"
        >
          {children}
        </Flex>     
      </>  
    </ReactModal>
  )
}

ModalWrapper.defaultProps = {
  isOpen: false,
  contentLabel: '',
  closeTimeoutMS: 300,
  style: {},
  width: 'fit-content',
  height: 'fit-content'
}

export default React.memo(ModalWrapper)
