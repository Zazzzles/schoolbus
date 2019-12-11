import DatePicker from 'react-datepicker'
import styled from 'styled-components'

export const StyledDatePicker = styled(DatePicker)`
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.transparent : theme.colors.gray.xlight};
  border: 1px solid
    ${({disabled, theme}) => disabled ? theme.colors.gray.light : theme.colors.gray.xlight};
  font-family: inherit;
  font-size: ${({theme}) => theme.fontSizes.small};
  padding: 0.6em 1em;
  height: 38px;
  border-radius: ${({theme}) => theme.radii.small};
  width: 100%;

  ::placeholder {
    color: ${({theme}) => theme.colors.gray.dark};
  }
`

export const iconStyles = {
  position: 'absolute',
  right: 10,
  bottom: 7,
  pointerEvents: 'none',
}