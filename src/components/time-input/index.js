import React, { Component } from 'react'
import styled from 'styled-components'
import TimeKeeper from 'react-timekeeper'
import ClockOutline from '@lessondesk/material-icons/dist/ClockOutline'
import { connect } from 'formik'

import { colors } from '../theme'
import './styles.css'

import { errorForField } from '../utils'
import InputWrapper from '../input-wrapper'
import Input from '../styled-input'

const iconStyles = {
  position: 'absolute',
  right: 10,
  bottom: 7,
  pointerEvents: 'none'
}

class TimeInput extends Component {

  static defaultProps = {
    name: 'time',
    label: 'Time',
    timeFormat: '12',
    placeholder: 'Set'
  }

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
    if (showDialogue && this.input) {
      const { top } = this.input.getBoundingClientRect()
      const innerHeight = window.innerHeight
      const renderAtBottom = (innerHeight-top > 340 || top < 300)
      return this.setState({ showDialogue, renderAtBottom })
    }
    this.setState({ showDialogue })
  }

  handleClickOutside = ({target}) => {
    if (this.clock && this.clock.contains(target)) {
      return
    }
    this.toggleDialogue(false)
  }

  handleChange = timeObj => {
    const { formik, name } = this.props
    formik.setFieldValue(name, timeObj)
  }

  render () {
    const { showDialogue, renderAtBottom } = this.state
    const wrapperPosition = renderAtBottom ? {top: 65} : {bottom: 45}

    const {
      formik,
      disabled,
      timeFormat,
      placeholder,
      name,
      label
    } = this.props

    const timeObj = formik.values && formik.values[name]
    const formattedTime = timeObj && timeObj[`formatted${timeFormat}`]
    const errorText = errorForField(formik.errors, formik.touched, name)

    return (
      <InputWrapper
        label={label}
        alertText={errorText}
        onClick={() => this.toggleDialogue(true)}
      >
        <Input
          type="text"
          name="timeInput"
          placeholder={placeholder}
          value={formattedTime ? formattedTime : ''}
          onChange={() => {}}
          ref={node => this.input = node}
          width="100%"
        />
        <ClockOutline style={iconStyles} color={colors.gray.dark} />

        {showDialogue && (
          <div
            className='clock-wrapper'
            ref={node => this.clock = node}
            style={wrapperPosition}
          >
            <TimeKeeper
              hour24Mode={timeFormat==="24"}
              switchToMinuteOnHourSelect
              closeOnMinuteSelect
              onDoneClick={() => this.toggleDialogue(false)}
              doneButton={null}
              time={formattedTime || '00:00'}
              disabled={disabled}
              name={name}
              onChange={this.handleChange}
            />
          </div>
        )}
      </InputWrapper>
    )
  }
}

export default connect(TimeInput)
