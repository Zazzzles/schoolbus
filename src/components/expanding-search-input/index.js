import React, { Component, createRef } from 'react'
import { debounce } from 'lodash-es'

import { Container, Input, iconAltStyling, expandedIconStyles } from './styles'
import Magnify from '@lessondesk/material-icons/dist/Magnify'

import { fontSizes, colors } from '../../config/theme.js'

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
    const { onExpand } = this.props

    this.setState(({expanded, value}) => ({
      expanded: !expanded,
      value: expanded ? value : ''
    }), () => {
      const { expanded } = this.state

      onExpand && onExpand(expanded)
      this.input.current.focus()
    })
  }


  render() {
    const { expanded } = this.state
    const {
      onChange,
      onExpand,
      placeholder = 'Search...',
      disabled,
      ...otherProps
    } = this.props

    return (
      <Container {...otherProps}>
        <Input
          disabled={disabled}
          placeholder={placeholder}
          expanded={expanded}
          ref={this.input}
          onChange={debounce((...args) => onChange(...args), 500)}
        />
        <Magnify
          onClick={this.toggleExpanded}
          style={{
            ...iconAltStyling,
            ...(expanded && expandedIconStyles),
          }}
          bg='white'
          size={fontSizes.large}
          color={colors.gray.default}
        />
      </Container>
    )
  }
}

export default ExpandingSearchInput
