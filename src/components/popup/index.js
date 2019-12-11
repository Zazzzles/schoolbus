import React, { Component } from 'react'
import IconButton from '../icon-button'


class Popup extends Component {

  state = {
    showDialogue: false,
    renderAtBottom: true
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  toggleDialogue = showDialogue => {
    const { disabled } = this.props

    if (disabled) return

    if (showDialogue && this.trigger) {
      const { top } = this.trigger.getBoundingClientRect()
      const innerHeight = window.innerHeight
      const renderAtBottom = (innerHeight - top > 340 || top < 300)
      return this.setState({ showDialogue, renderAtBottom })
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
    const { showDialogue, renderAtBottom } = this.state
    const wrapperPosition = renderAtBottom ? { top: 65 } : { bottom: 45 }

    const {
      children
    } = this.props

    return (
      <IconButton
        icon="overflow"
        color="white"
        noShadow
        onClick={() => this.toggleDialogue(true)}
        ref={node => this.trigger = node}
      >
        {showDialogue && (
          <div
            style={{width: 100, height: 200, background: 'white'}}
            ref={node => this.menu = node}
            style={wrapperPosition}
          >
            Menu
            {children || 'Menu'}
          </div>
        )}
      </IconButton>
    )
  }
}

export default Popup
