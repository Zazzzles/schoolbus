import React, { Component } from 'react'

import LanguageSetField from '../language-set-field'
import Button from '../button'

import { Container, EditTextContainer, EditText, EditButton, Actions } from './styles'

function updateLanguageSets(formikLanguageSets, state) {
  const { languageSets: currentLanguageSets } = state
  const newLanguageSets = formikLanguageSets.reduce((acc, set, i) => {
    const currentSet = currentLanguageSets[i]

    if (currentSet && currentSet.locale === set.locale) {
      return acc.concat(currentSet)
    }
    return acc.concat(Object.assign({}, set))
  }, [])

  return {
    ...state,
    languageSets: newLanguageSets,
  }
}

class TranslateModal extends Component {
  static defaultProps = {
    values: [],
    maxTranslationLength: 120,
  }

  state = {
    languageSets: [],
  }

  componentDidMount() {
    const { values } = this.props
    const clonedObjects = values.map(obj => Object.assign({}, obj))
    this.setState({ languageSets: clonedObjects })
  }

  static getDerivedStateFromProps(props, state) {
    const { values: formikLanguageSets } = props
    return formikLanguageSets ? updateLanguageSets(formikLanguageSets, state) : null
  }

  handleValueChange = (i, {value}) => {
    const { languageSets: prevLanguageSets } = this.state
    const { maxTranslationLength } = this.props
    const slicedValue = value.slice(0, maxTranslationLength)
    const languageSets = prevLanguageSets.map((set, index) => (index === i 
      ? {...set, value: slicedValue}
      : set
    ))
    this.setState({ languageSets })
  }

  render() {
    const { placeholder, onSubmit, onLanguagesChange, disabled, languages } = this.props
    const { languageSets } = this.state

    return (
      <Container>
        {languageSets.map((languageSet, i) => (
          <LanguageSetField
            key={languageSet.locale}
            {...languageSet}
            placeholder={placeholder}
            onChange={({ target }) => this.handleValueChange(i, target)}
            disabled={disabled}
            languages={languages}
          />
        ))}

        <Actions>
          <EditTextContainer>
            {onLanguagesChange && (
              <>
                <EditButton onClick={onLanguagesChange}>Edit</EditButton>
                <EditText>&nbsp; {`language preferences.`}</EditText>
              </>
            )}
          </EditTextContainer>

          <Button
            variant="primary"
            m={2}
            onClick={() => onSubmit(languageSets)}
            disabled={disabled}
          >
            Save
          </Button>
        </Actions>
      </Container>
    )
  }
}

export default TranslateModal
