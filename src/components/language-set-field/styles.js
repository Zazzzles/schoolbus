import styled from 'styled-components'
import StyledInput from '../styled-input'

export const Container = styled.div`
  width: 100%;
  height: 2.7em;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: ${({ theme }) => theme.colors.gray.xxlight};
  margin-bottom: 1em;
`

export const Inner = styled.div`
  width: 14em;
  border: solid 1px ${({ theme }) => theme.colors.gray.xlight};
  border-radius: ${({ theme }) => theme.radii.small};
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;
`

export const Input = styled(StyledInput)`
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.small};
`

export const LanguageText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
`

export const DefaultText = styled.span`
  padding-left: 0.5em;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.gray.black};
`
