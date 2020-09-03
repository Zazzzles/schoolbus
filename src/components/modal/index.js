import React, { Component } from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

import IconButton from '../icon-button'
import Flex from '../flex'

import { 
  Header, 
  Title, 
  ProximusTitle,
  Subtitle,
  Description, 
  InnerContent, 
  FadeOverlay, 
  ContentWrapper,
  Actions,
  Footer
} from './styles'

ReactModal.setAppElement('body')

class ModalWrapper extends Component {
  
  static defaultProps = {
    isOpen: false,
    contentLabel: '',
    closeTimeoutMS: 300,
    style: {},
    contentStyle: {},
    wrapperStyle: {},
    width: 'fit-content',
    height: 'fit-content',
    scrollable: true,
    centerTitle: false,
    hideCloseButton: false
  }

  static propTypes = {
    onClose: PropTypes.func,
    onBack: PropTypes.func,
    style: PropTypes.object,
    contentStyle: PropTypes.object,
    wrapperStyle: PropTypes.object,
    children: PropTypes.node,
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
    proximusTitle: PropTypes.string,
    centerTitle: PropTypes.bool,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    actions: PropTypes.node,
    footer: PropTypes.node,
    scrollable: PropTypes.bool,
    hideCloseButton: PropTypes.bool,
  }

  state = {
    contentSpacing: 0
  }

  afterOpenModal = () => {
    const headerHeight = this.headerRef ? this.headerRef.clientHeight : 0
    const footerHeight = this.footerRef ? this.footerRef.clientHeight : 0
    let contentSpacing = headerHeight + footerHeight 

    this.setState({contentSpacing})
  }

  render() {
    const { contentSpacing } =this.state

    const {
      onClose,
      onBack,
      style,
      contentStyle,
      wrapperStyle,
      children,
      width,
      height,
      title,
      proximusTitle,
      centerTitle,
      subtitle,
      description,
      actions,
      footer,
      scrollable,
      hideCloseButton,
      ...otherProps
    } = this.props

    const hasHeader = !!title || !!description || !!subtitle || !!actions

    const styleOverrides = {
      closeBtn: {
        position: "absolute",
        top: 25,
        right: 25,
        zIndex: 9999
      },
      content: {
        maxHeight: scrollable ? `calc(95vh - 5em - ${contentSpacing}px)` : 'none',
        maxWidth: 1100,
        overflow: scrollable ? 'auto' : 'visible'
      },
      centerText: {
        textAlign: 'center'
      },
      backBtn: {
        position: "absolute",
        top: 25,
        left: 20,
        zIndex: 1
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
        overflow: scrollable ? 'auto' : 'visible',
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
        color="transparent"
        style={styleOverrides.closeBtn}
        onClick={onClose}
      />
    )

    const renderBackButton = () => (
      <IconButton
        onClick={onBack}
        color="transparent"
        icon="back"
        style={styleOverrides.backBtn}
        noShadow
      />
    )

    return (
      <ReactModal
        onRequestClose={onClose}
        onAfterOpen={this.afterOpenModal}
        style={modalStyles}
        {...otherProps}
      >
        <>
          {onClose && !hideCloseButton && renderCloseIcon()}
          {onBack && renderBackButton()}

          <Header ref={node => this.headerRef = node}>
            {title && (
              <Flex 
                width="100%" 
                justifyContent={centerTitle ? 'center' : 'flex-start'}
                pl={onBack && !centerTitle ? '2.5em' : 0}
              >
                <Title>{title}</Title>
                {proximusTitle && <ProximusTitle>{`\xa0| ${proximusTitle}`}</ProximusTitle>}
              </Flex>
            )}
            
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {description && <Description centerText={centerTitle}>{description}</Description>}
            {actions && <Actions>{actions}</Actions>}
          </Header>
      

          <ContentWrapper style={wrapperStyle}>
            {scrollable && <FadeOverlay />}

            <InnerContent
              hasHeader={hasHeader}
              style={{ ...styleOverrides.content, ...contentStyle }}
            >
              {children}
            </InnerContent>
          </ContentWrapper>

          {footer && <Footer ref={node => this.footerRef = node}>{footer}</Footer>}
        </>
      </ReactModal>
    )
  }
}

export default ModalWrapper
