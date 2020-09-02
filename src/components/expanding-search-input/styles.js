import styled from 'styled-components'
import { radii, fontSizes } from '../../config/theme'
import { space, layout } from 'styled-system'

export const Container = styled.div`
  position: relative;
  height: 38px;
  display: flex;
  align-items: center;
  width: auto;
  min-width: 250px;
  ${space}
  ${layout}
`

export const Input = styled.input`
  border: none;
  background: ${({ theme }) => theme.colors.gray.xxlight};
  color: ${({ theme }) => theme.colors.gray.xdark};
  border-radius: ${({ theme }) => theme.radii.xlarge};
  padding: 0 1em;
  margin-right: 1em;
  transition: transform 0.3s, opacity 0.3s;
  width: 100%;
  transform: ${({expanded}) => expanded ? 'scaleX(1)' : 'scaleX(0)'};
  transform-origin: right;
  opacity: ${({expanded}) => expanded ? '1' : '0'};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  height: 100%;
  &::placeholder {
    ${({ theme }) => theme.colors.gray.light};
  }
`

export const iconAltStyling = {
  position: 'absolute',
  right: 14,
  borderRadius: radii.full,
  padding: 9,
  fontSize: fontSizes.xxlarge,
  cursor: 'pointer',
}

export const expandedIconStyles = {
  boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.09)',
}

