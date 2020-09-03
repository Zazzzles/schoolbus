import React from 'react'

import { Container, Inner, Input, LanguageText, DefaultText } from './styles'

const LanguageSetField = ({
  locale,
  default: defaultLanguage,
  containerId,
  languages,
  inputProps,
  placeholder,
  value,
  onChange,
  language,
  name,
  id = name,
  disabled,
  ...otherProps
}) => {
  language = language || languages.find(({ code }) => code === locale)

  return (
    <Container id={containerId} {...otherProps}>
      <Inner>
        <LanguageText htmlFor={id}>
          {language ? language.value || locale : locale}
          {defaultLanguage && <DefaultText>(default)</DefaultText>}
        </LanguageText>
      </Inner>
      <Input
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...inputProps}
      />
    </Container>
  )
}

LanguageSetField.defaultProps = {
  languages: [],
}

export default React.memo(LanguageSetField)
