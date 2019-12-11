import React, { Component } from 'react'
import toast from 'just-toasty'
import { connect } from 'formik'
import Translate from '@lessondesk/material-icons/dist/Translate'

import InputWrapper from '../input-wrapper'
import TranslateModal from '../modals/translate-modal'
import ModalWrapper from '../modals/modal-wrapper'

import createDefaultInputProps from '../../utils/create-input-defaults'
import { fontSizes, colors } from '../../config/theme.js'

import { Container, TranslateIconContainer, TranslateInputContainer } from './styles'

class TranslationInput extends Component {
  static defaultProps = {
    type: 'lesson',
    onChange: () => {},
    onBlur: () => {}
  }

  state = {
    showModal: false,
  }

  componentDidMount() {
    const { formik, name } = this.props
    const hasFormik = Object.keys(formik).length > 0

    if (!hasFormik) {
      throw Error('TranslationInput must be wrapped in a Formik provider instance')
    }

    if (
      !formik.values[name] ||
      !formik.values[name][0] ||
      formik.values[name][0].value === undefined
    ) {
      throw Error(`TranslationInput requires a default language to be set e.g.`)
    }
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  handleTranslationsSubmit = languageSets => {
    const { formik, name } = this.props
    const hasEmptySet = languageSets.some(languageSet => !languageSet.value)

    if (hasEmptySet) {
      toast('Oops! Please add all required translations.')
      return
    }

    formik.setFieldValue(name, languageSets)

    this.toggleModal()
  }

  updateDefaultValue = ({ target }) => {
    const { value } = target
    const { formik, name } = this.props
    const { values, setFieldValue } = formik
    const currentValue = values[name]

    currentValue[0].value = value
    return setFieldValue(name, currentValue)
  }

  getAlertMessage = (message = '') => {
    if (Array.isArray(message)) {
      const alertMessageObj = message.find(m => m && !!m.value)
      return alertMessageObj && alertMessageObj.value
    }

    return message
  }

  render() {
    const { showModal } = this.state

    const {
      inputProps,
      type,
      formik,
      value,
      onBlur,
      onChange,
      placeholder,
      onLanguagesChange,
      alertText: alertTextOverride,
      disabled,
      languages,
      ...otherProps
    } = this.props

    const { id = otherProps.name, label, name } = otherProps

    const { alertText, hasFormik, ...inputDefaults } = createDefaultInputProps({
      alertText: alertTextOverride,
      value,
      onBlur,
      onChange,
      name,
      formik,
    })

    const val =
      formik.values[name] && formik.values[name][0] && formik.values[name][0].value
        ? formik.values[name][0].value
        : ''

    return (
      <InputWrapper alertText={this.getAlertMessage(alertText)} {...otherProps}>
        <Container>
          <TranslateInputContainer
            {...inputDefaults}
            id={id}
            value={val}
            onChange={this.updateDefaultValue}
            name={name}
            placeholder={placeholder || label}
            disabled={disabled}
            {...inputProps}
          />
          <TranslateIconContainer onClick={this.toggleModal}>
            <Translate size={fontSizes.normal} color={colors.gray.dark} />
          </TranslateIconContainer>
          <ModalWrapper isOpen={showModal} onRequestClose={this.toggleModal}>
            <TranslateModal
              values={formik.values[name]}
              placeholder={placeholder || label}
              onClose={this.toggleModal}
              onSubmit={this.handleTranslationsSubmit}
              onLanguagesChange={onLanguagesChange}
              type={type}
              disabled={disabled}
              languages={languages}
            />
          </ModalWrapper>
        </Container>
      </InputWrapper>
    )
  }
}

export default connect(TranslationInput)
