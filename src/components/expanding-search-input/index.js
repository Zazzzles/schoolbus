import React, { Component, createRef } from 'react'

import { ContainerAlt, InputAlt } from './styles'
import Magnify from '@lessondesk/material-icons/dist/Magnify'

import { fontSizes, colors } from '../theme.js'

const IconAltStyling = {
  position: 'absolute',
  right: '14px',
  borderRadius: '100%',
  padding: '9px',
  fontSize: '32px',
  cursor: 'pointer',
}

const ExpandedIconStyles = {
  boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.09)',
}

class ExpandingSearchInput extends Component {

  constructor() {
    super()

    this.state = {
      expanded: false,
      value: '',
    }

    this.input = createRef()
  }

  toggleExpanded = () => {
    const { expanded, value } = this.state

    this.setState({
      expanded: !expanded,
      value: expanded ? value : '',
    }, () => this.input.current.focus())
  }

  render() {
    const { expanded } = this.state
    return (
      <ContainerAlt>
        <InputAlt
          style={{ padding: '0 1em' }}
          placeholder="Search..."
          expanded={expanded}
          ref={this.input}
          {...this.props}
        />
        <Magnify
          onClick={this.toggleExpanded}
          style={{
            ...IconAltStyling,
            ...(expanded && ExpandedIconStyles),
          }}
          bg={'white'}
          size={fontSizes.large}
          color={colors.gray.dark}
        />
      </ContainerAlt>
    )
  }
}

export default ExpandingSearchInput
