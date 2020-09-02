import Toggle from './'

export default {
  title: 'Inputs/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'The Toggle component represents a toggle, which can be used in forms or anywhere in a document that needs simple, standard toggling functionality.'
      }
    },
  }
}


export const Base = args => <Toggle {...args} />
Base.args = { checked: false }

export const Checked = () => <Toggle checked />