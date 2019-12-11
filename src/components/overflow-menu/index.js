import React, { Component } from 'react'

import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
import { colors } from '../../config/theme'

import styled from 'styled-components'

const Trigger = styled.div`
  position: relative;
  width: 24px;
  height: 24p;
  background-color: ${({ theme }) => theme.colors.transparent};
  margin: 0;
`

const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`


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

    const {
      children
    } = this.props

    return (
      <Trigger ref={node => this.trigger = node} onClick={() => this.toggleDialogue(true)}>
        <DotsVertical color={colors.gray.dark} />
        {showDialogue && (
          <MenuWrapper ref={node => this.menu = node}>
            {children || 'Menu'}
          </MenuWrapper>
        )}
      </Trigger>
    )
  }
}

export default Popup


// import React from 'react'
// import Popup from 'reactjs-popup'
// import styled from 'styled-components'
// import DotsVertical from '@lessondesk/material-icons/dist/DotsVertical'
// import { colors } from '../../config/theme'

// const SettingsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   > * {
//     display: inline-block;
//     margin: 0.4em 0;
//   }
// `

// const OverflowMenu = ({ position, children }) => (
//   <Popup
//     closeOnDocumentClick
//     contentStyle={{
//       width: 'auto',
//       padding: '0.5em 2em 0.5em 1em',
//       borderRadius: '.4em',
//       border: 'none',
//       animation: '200ms fade-in ease-in',
//     }}
//     trigger={<div><DotsVertical color={colors.gray.dark} /></div>}
//     position={position || 'left center'}
//     arrow={false}
//   >
//     {closePopup => (
//       <SettingsContainer>
//         {React.Children.map(children, child =>
//           React.cloneElement(child, {
//             closePopup,
//           })
//         )}
//       </SettingsContainer>
//     )}
//   </Popup>
// )

// export default OverflowMenu
