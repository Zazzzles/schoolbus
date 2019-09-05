import React from 'react'
import { storiesOf } from '@storybook/react'
import { LanguageSetField } from '../'

const defaultLanguage = {
  code: 'en-ZA',
  value: 'English',
}

storiesOf('Input | Language Set Field', module)
  .addParameters({ component: LanguageSetField })
  .add('Default', () => (
    <LanguageSetField language={defaultLanguage} name="test" placeholder="Default" />
  ))
