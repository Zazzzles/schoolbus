import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.white : theme.colors.gray.xxlight};
  border: 1px solid
    ${({disabled, theme}) => theme.colors.gray[disabled ? 'xlight' : 'xxlight']};
  font-family: inherit;
  font-size: ${({theme}) => theme.fontSizes.small};
  padding: 0.5em 1em;
  height: 38px;
  border-radius: ${({theme}) => theme.radii.small};
  width: 100%;
  color: ${({ theme }) => theme.colors.gray.xdark};

  ::placeholder {
    color: ${({theme}) => theme.colors.gray.light};
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
