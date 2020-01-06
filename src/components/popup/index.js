import React, { Component } from 'react'

import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import { colors } from '../../config/theme'

import { Trigger, ContentWrapper, Container} from './styles'

class Popup extends Component {

  static defaultProps = {
    position: 'bottomLeft'
  }

  state = {
    showDialogue: false,
    renderToBottom: true,
    renderToLeft: true,
    dimensions: {},
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false)

    if (this.menu) {
      const { offsetHeight: height, offsetWidth: width } = this.menu
      this.setState({ dimensions: {height, width}})
    }  
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  toggleDialogue = showDialogue => {

    const { disabled, position } = this.props

    if (disabled) return

    if (showDialogue && this.trigger) {
      const { height, width } = this.state.dimensions
      const { bottom, right, left } = this.trigger.getBoundingClientRect()
      const { innerHeight, innerWidth } = window

      const renderDown = ['bottomLeft', 'bottomRight'].includes(position)
      const renderLeft = ['topLeft', 'bottomLeft'].includes(position)

      if (height && width) {
        const renderToBottom = renderDown && (innerHeight - bottom > height) || bottom < height
        const renderToLeft = renderLeft && right > width || (innerWidth - left < width)
        return this.setState({ showDialogue, renderToBottom, renderToLeft })
      }
    }

    this.setState({ showDialogue })
  }

  closePopup = () =>  this.toggleDialogue(false)

  handleClickOutside = ({ target }) => {
    if (this.menu && this.menu.contains(target)) return
    this.toggleDialogue(false)
  }

  render() {
    const { showDialogue, renderToBottom, renderToLeft } = this.state
    const { children, trigger, ...otherProps } = this.props

    return (
      <Container>
        <Trigger
          ref={node => this.trigger = node}
          onClick={() => !showDialogue && this.toggleDialogue(true)}
          {...otherProps}
        >
          {trigger || <DotsVertical color={colors.gray.dark} />}

          <ContentWrapper
            ref={node => this.menu = node}
            showDialogue={showDialogue}
            renderToBottom={renderToBottom}
            renderToLeft={renderToLeft}
          >
            {typeof children === 'function' ? children(this.closePopup) : children}
          </ContentWrapper>
        </Trigger>
      </Container>
    )
  }
}

export default Popup