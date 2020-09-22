import React from 'react'
import LanguageSetField from './'

const defaultLanguage = {
  code: 'en-ZA',
  value: 'English',
}

export default {
  title: 'Inputs/ Language Set Field',
  component: LanguageSetField,
  parameters: {
    docs: {
      description: {
        component: 'A text input field that displays the language next to it.',
      },
    },
  },
}

export const Base = args => <LanguageSetField {...args} />
Base.args = {
  placeholder: 'Placeholder',
  name: 'name',
  disabled: false,
  language: defaultLanguage,
  default: true,
}
