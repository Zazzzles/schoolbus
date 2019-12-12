import React, { Component } from 'react'

import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import { colors } from '../../config/theme'

import { Trigger, MenuWrapper } from './styles'

class Popup extends Component {

  state = {
    showDialogue: false,
    renderToBottom: true,
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
    const { disabled } = this.props

    if (disabled) return

    if (showDialogue && this.trigger) {
      const { height, width } = this.state.dimensions
      const { bottom, right, left } = this.trigger.getBoundingClientRect()
      const { innerHeight, innerWidth } = window

      if (height && width) {
        const renderToBottom = (innerHeight - bottom > height) || bottom < height
        const renderToLeft = right > width || (innerWidth - left < width)
        return this.setState({ showDialogue, renderToBottom, renderToLeft })
      }
    }

    this.setState({ showDialogue })
  }

  handleClickOutside = ({ target }) => {
    if (this.menu && this.menu.contains(target)) {
      return
    }
    this.toggleDialogue(false)
  }

  render() {
    const { showDialogue, renderToBottom, renderToLeft } = this.state
    const { children } = this.props

    return (
      <Trigger ref={node => this.trigger = node} onClick={() => this.toggleDialogue(true)}>
        <DotsVertical color={colors.gray.dark} />

        <MenuWrapper
          ref={node => this.menu = node}
          showDialogue={showDialogue}
          renderToBottom={renderToBottom}
          renderToLeft={renderToLeft}
        >
          {children}
        </MenuWrapper>
      </Trigger>
    )
  }
}

export default Popup