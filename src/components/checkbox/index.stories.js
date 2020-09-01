import React from 'react'
import Checkbox from './'

export default {
  title: 'Actions/ Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'The Checkbox component represents a togglable action, which can be used in forms or anywhere in a document that needs simple, standard button functionality.'
      }
    }
  }
}

export const Base = () => <Checkbox>Children go here</Checkbox>
Base.args = {
  checked: false,
  disabled: false
}

export const WithLabel = () => <Checkbox>With Label</Checkbox>
export const Checked = () => <Checkbox checked />
export const Disabled = () => <Checkbox disabled>Disabled</Checkbox>
