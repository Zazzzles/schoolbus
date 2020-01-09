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
    right: 'auto'
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

  handleChange = timeObj => {
    const { formik, name } = this.props
    formik.setFieldValue(name, timeObj)
  }

  render () {
    const {
      formik,
      disabled,
      timeFormat,
      placeholder,
      name,
      label,
      width
    } = this.props

    const timeObj = formik.values && formik.values[name]
    const formattedTime = timeObj && timeObj[`formatted${timeFormat}`]
    const errorText = errorForField(formik.errors, formik.touched, name)

    const trigger = (
      <InputWrapper
        label={label}
        alertText={errorText}
        width="100%"
      >
        <Input
          type="text"
          name="timeInput"
          placeholder={placeholder}
          value={formattedTime ? formattedTime : ''}
          disabled={disabled}
          onChange={() => { }}
          width="100%"
          autoComplete="off"
        />
        <ClockOutline style={styleOverrides.icon} color={colors.gray.dark} />
      </InputWrapper>
    )

    return (
      <Popup 
        trigger={trigger} 
        style={{width}}
        contentStyle={styleOverrides.popup}
        disabled={disabled}
      >
        <div className='clock-wrapper'>
          <TimeKeeper
            hour24Mode={timeFormat === "24"}
            switchToMinuteOnHourSelect
            closeOnMinuteSelect
            time={formattedTime || '00:00'}
            disabled={disabled}
            name={name}
            onChange={this.handleChange}
          />
        </div>
      </Popup>
    )
  }
}

export default connect(TimeInput)
