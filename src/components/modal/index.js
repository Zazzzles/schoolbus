import React from 'react'
import ReactModal from 'react-modal'

import IconButton from '../icon-button'

import { 
  Header, 
  Title, 
  Subtitle,
  Description, 
  InnerContent, 
  FadeOverlay, 
  ContentWrapper,
  Actions,
  Footer
} from './styles'

ReactModal.setAppElement('body')

const ModalWrapper = ({
  onClose,
  style,
  contentStyle,
  children,
  width,
  height,
  title,
  subtitle,
  description,
  actions,
  footer,
  ...otherProps
}) => {

  const hasHeader = !!title || !!description || !!subtitle || !!actions

  const styleOverrides = {
    closeBtn: {
      position: "absolute",
      top: 25,
      right: 25,
      zIndex: 1
    },
    content: {
      maxHeight: hasHeader ? '70vh' : '90vh',
      maxWidth: 1100,
      overflow: 'auto'
    }
  }

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      position: 'relative',
      top: 'unset',
      left: 'unset',
      right: 'unset',
      bottom: 'unset',
      borderRadius: '1em',
      padding: '2em 2em 0',
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
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {description && <Description>{description}</Description>}
            {actions && <Actions>{actions}</Actions>}
          </Header>
        )}
        
        <ContentWrapper>
          <FadeOverlay />

          <InnerContent 
            hasHeader={hasHeader} 
            style={{ ...contentStyle, ...styleOverrides.content}}
          >     
            {children}
          </InnerContent> 
        </ContentWrapper>    

        {footer && <Footer>{footer}</Footer>}
      </>  
    </ReactModal>
  )
}

ModalWrapper.defaultProps = {
  isOpen: false,
  contentLabel: '',
  closeTimeoutMS: 300,
  style: {},
  contentStyle: {},
  width: 'fit-content',
  height: 'fit-content'
}

export default React.memo(ModalWrapper)
