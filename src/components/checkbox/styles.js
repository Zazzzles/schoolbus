import styled from 'styled-components'
import { space, layout, typography } from 'styled-system'

export const StyledInput = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  z-index: -1;
  position: absolute;
  left: -10px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: ${({theme}) => theme.radii.full};
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: none;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s, transform 0.2s;

  &:checked,
  &:indeterminate {
    background-color: ${({theme}) => theme.colors.gray};
  }

  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  &:active + span::before {
    border-color: ${({theme}) => theme.colors.gray};
  }

  &:checked:active + span::before {
    border-color: transparent;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:disabled {
    opacity: 0;
  }

  &:disabled + span {
    color: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }

  &:disabled + span::before {
    border-color: rgba(0, 0, 0, 0.3);
  }
`

export const StyledLabel = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray.dark};
  font-family: ${({theme}) => theme.fonts.Montserrat};
  font-size: ${({theme}) => theme.fontSizes.small};
  line-height: ${({theme}) => theme.lineHeights.relaxed};
  font-weight: ${({ theme }) => theme.fontWeights.default};


  &:hover > ${/* sc-selector */ StyledInput} {
    opacity: 0.04;
  }

  &:hover > ${/* sc-selector */ StyledInput}:focus {
    opacity: 0.16;
  }

  ${space}
  ${layout}
  ${typography}
`

export const StyledSpan = styled.span`
  display: inline-block;
  width: 100%;

  ${({ labelled, theme }) => `
    &::before {
      content: '';
      display: inline-block;
      box-sizing: border-box;
      margin: ${labelled ? '2px 11px 3px 1px' : '3px 1px'};
      border: solid 2px; /* Safari */
      border-color: rgba(0, 0, 0, 0.6);
      border-radius: ${theme.radii.xsmall};
      width: 18px;
      height: 18px;
      vertical-align: top;
      transition: border-color 0.2s, background-color 0.2s;
    }
  `}

  &::after {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 4px;
    left: 2px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  ${/* sc-selector */ StyledInput}:checked + &::before,
  ${/* sc-selector */ StyledInput}:indeterminate + &::before {
    border-color: ${({ theme, disabled }) => disabled
    ? theme.colors.gray[2] : theme.colors.primary};
    background-color: ${({ theme, disabled }) => disabled
    ? theme.colors.gray[2] : theme.colors.primary};
  }

  ${/* sc-selector */ StyledInput}:checked + &::after,
  ${/* sc-selector */ StyledInput}:indeterminate + &::after {
    border-color: rgb(255, 255, 255);
  }

  ${/* sc-selector */ StyledInput}:indeterminate + &::after {
    border-left: none;
    transform: translate(4px, 3px);
  }
`