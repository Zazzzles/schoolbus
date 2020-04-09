import DatePicker from 'react-datepicker'
import styled from 'styled-components'

export const StyledDatePicker = styled(DatePicker)`
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.transparent : theme.colors.gray.xxlight};
  border: 1px solid
    ${({ disabled, theme }) => theme.colors.gray[disabled ? 'xlight' : 'xxlight']};
  font-family: inherit;
  font-size: ${({theme}) => theme.fontSizes.small};
  padding: 0.6em 1em;
  height: 38px;
  border-radius: ${({theme}) => theme.radii.small};
  width: 100%;
  color: ${({ theme }) => theme.colors.gray.xdark};

  ::placeholder {
    color: ${({theme}) => theme.colors.gray.light};
  }
`

export const iconStyles = {
  position: 'absolute',
  right: 10,
  bottom: 7,
  pointerEvents: 'none',
}