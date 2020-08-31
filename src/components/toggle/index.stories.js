import Toggle from './'

export default {
  title: 'Input/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'The Toggle component represents a toggle, which can be used in forms or anywhere in a document that needs simple, standard toggling functionality.'
      }
    },
  }
}


export const Basic = args => <Toggle {...args} />;
Basic.args = { checked: false }

export const Checked = args => <Toggle {...args} />;
Checked.args = { checked: true }