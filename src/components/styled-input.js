import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: ${props =>
    props.disabled ? props.theme.colors.transparent : props.theme.colors.gray.xlight};
  border: 1px solid
    ${props => (props.disabled ? props.theme.colors.gray.default : props.theme.colors.gray.xlight)};
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0.5em 1em;
  height: 38px;
  border-radius: ${props => props.theme.radii.small};
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.gray.xxdark};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
    margin: 0;
  }
`

StyledInput.displayName = 'Input'

export default StyledInput
