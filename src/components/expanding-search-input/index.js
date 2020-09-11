import React, { Component, createRef } from 'react'
import { debounce } from 'lodash-es'

import { Container, Input, iconAltStyling, expandedIconStyles } from './styles'
import Magnify from '@lessondesk/material-icons/dist/Magnify'
import VisuallyHidden from '../visually-hidden'

import { fontSizes, colors } from '../../config/theme.js'

const SEARCH_DEBOUNCE_TIME = 500

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
      id,
      ...otherProps
    } = this.props

    return (
      <Container {...otherProps}>
        {id && (
          <VisuallyHidden>
            <label htmlFor={id}>Search</label>
          </VisuallyHidden>
        )}
        <Input
          disabled={disabled}
          placeholder={placeholder}
          expanded={expanded}
          ref={this.input}
          id={id}
          onChange={onChange && debounce(({ target }) => onChange(target.value), SEARCH_DEBOUNCE_TIME)}
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
