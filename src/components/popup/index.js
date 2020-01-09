import React, { PureComponent } from 'react'

import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import { colors } from '../../config/theme'

import { Trigger, ContentWrapper, Container} from './styles'

class Popup extends PureComponent {

  static defaultProps = {
    position: 'bottomLeft',
    contentStyle: {},
    xOffset: '5px',
    yOffset: '5px'
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
      const { offsetHeight: menuHeight, offsetWidth: menuWidth } = this.menu
      this.setState({ dimensions: { menuHeight, menuWidth }})
    } 
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  toggleDialogue = showDialogue => {
    const { disabled, position } = this.props

    if (disabled) return

    if (showDialogue && this.trigger) {
      const { menuHeight, menuWidth } = this.state.dimensions
      const { bottom, right, left, top } = this.trigger.getBoundingClientRect()
      const { innerHeight, innerWidth } = window

      const renderDown = ['bottomLeft', 'bottomRight'].includes(position)
      const renderLeft = ['topLeft', 'bottomLeft'].includes(position)

      if (menuHeight && menuWidth) {
        const renderToBottom = renderDown && (innerHeight - bottom > menuHeight) || (top < menuHeight)
        const renderToLeft = renderLeft && right > menuWidth || (innerWidth - left < menuWidth)
        return this.setState({ showDialogue, renderToBottom, renderToLeft })
      }
    }

    this.setState({ showDialogue })
  }

  closePopup = () =>  this.toggleDialogue(false)

  handleClickOutside = ({ target }) => {
    const isMenu = this.menu && this.menu.contains(target)
    const isTrigger = this.trigger && this.trigger.contains(target)
    if (isMenu || isTrigger) return
    this.toggleDialogue(false)
  }

  getElement = child => {
    const { closeOnSelect } = this.props

    const childProps = closeOnSelect ? ({ 
      onClick: this.closePopup
    }) : {}

    return React.cloneElement(<div>{child}</div>, childProps)
  }

  render() {
    const { showDialogue, renderToBottom, renderToLeft } = this.state
    const { children, trigger, contentStyle, xOffset, yOffset, ...otherProps } = this.props

    const childrenWithProps = React.Children.map(children, child => {
      return this.getElement(child)
    })

    return (
      <>
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
            xOffset={xOffset}
            yOffset={yOffset}
            style={contentStyle}
          >
            
            {typeof children === 'function' ? children(this.closePopup) : childrenWithProps}
          </ContentWrapper>
        </Trigger>
      </>
    )
  }
}

export default Popup