import styled from 'styled-components'
import { space, layout } from 'styled-system'

export const ToggleContainer = styled.div`
  display: block;
  padding-bottom: 3px;
  width: 60px;
  height: 40px;
  position: relative;
  ${space}
  ${layout}
`

export const ToggleInput = styled.input`
  display: none;
`

export const ToggleLabel = styled.label`
  cursor: pointer;
  position: relative;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray.dark};

  ::before {
    background: ${({ theme }) => theme.colors.gray.default};
    border-radius: ${({ theme }) => theme.radii.large};
    content: '';
    height: 15px;
    margin-top: 15px;
    position: absolute;
    opacity: 0.3;
    transition: all 0.4s ease-in-out;
    width: 40px;
  }

  ::after {
    background: ${({ theme }) => theme.colors.gray.light};
    border-radius: ${({ theme }) => theme.radii.full};
    box-shadow: ${({ theme }) => theme.shadows[0]};
    content: '';
    height: 24px;
    left: 0px;
    margin-top: 13px;
    position: absolute;
    top: -3px;
    transition: all 0.3s ease-in-out;
    width: 24px;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + &::before {
    background: ${({ theme }) => theme.colors.gray.light};
    opacity: 0.5;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${ToggleInput}:checked + &::after {
    background: ${({ theme }) => theme.colors.primary};
    left: 20px;
  }
`
