import React, { Component } from 'react'
import TimeKeeper from 'react-timekeeper'
import ClockOutline from '@lessondesk/material-icons/dist/ClockOutline'
import { connect } from 'formik'

import { colors } from '../../config/theme'
import './styles.css'

import { errorForField } from '../../utils/error-for-field'
import InputWrapper from '../input-wrapper'
import Input from '../styled-input'
import Popup from '../popup'

const styleOverrides = {
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 7,
    pointerEvents: 'none'
  },
  popup: {
    left: '0px',
    right: 'auto',
    transformOrigin: 'top center'
  }
}

class TimeInput extends Component {

  static defaultProps = {
    name: 'time',
    label: 'Time',
    timeFormat: '12',
    placeholder: 'Set',
    disabled: false,
    width: "48%"
  }

  state = {
    showTime: true
  }

  handleChange = timeObj => {
    const { formik, name } = this.props
    formik.setFieldValue(name, timeObj)
  }

  resetClock = closePopup => {
    closePopup()
    this.setState({showTime: false}, () => {
      this.setState({showTime: true})
    })
  }

  render () {
    const {showTime} = this.state

    const {
      formik,
      disabled,
      timeFormat,
      placeholder,
      name,
      width,
      ...otherProps
    } = this.props

    const timeObj = formik.values && formik.values[name]
    const formattedTime = timeObj && timeObj[`formatted${timeFormat}`]
    const errorText = errorForField(formik.errors, formik.touched, name)

    const trigger = (
      <InputWrapper
        alertText={errorText}
        width="100%"
        {...otherProps}
      >
        <Input
          type="text"
          name="timeInput"
          placeholder={placeholder}
          value={formattedTime ? formattedTime : ''}
          disabled={disabled}
          onChange={() => {}}
          width="100%"
          autoComplete="off"
        />
        <ClockOutline style={styleOverrides.icon} color={colors.gray.default} />
      </InputWrapper>
    )

    return (
      <Popup 
        trigger={trigger} 
        style={{width}}
        contentStyle={styleOverrides.popup}
        disabled={disabled}
      >
        {closePopup => showTime && (
          <div className='clock-wrapper'>
            <TimeKeeper
              hour24Mode={timeFormat === "24"}
              switchToMinuteOnHourSelect
              time={formattedTime || '00:00'}
              name={name}
              onChange={this.handleChange}
              onDoneClick={() => this.resetClock(closePopup)}
            />
          </div>
        )}
      </Popup>
    )
  }
}

export default connect(TimeInput)
