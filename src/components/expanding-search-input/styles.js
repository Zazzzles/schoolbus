import styled from 'styled-components'
import { radii, fontSizes } from '../../config/theme'

export const ContainerAlt = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
  width: auto;
  min-width: 250px;
`

export const Input = styled.input`
  border: none;
  background: transparent;
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 0.6em;
  margin-right: 1em;
  transition: transform 0.3s, opacity 0.3s;
  width: 15em;
  transform: ${({expanded}) => expanded ? 'scaleX(1)' : 'scaleX(0)'};
  transform-origin: right;
  opacity: ${({expanded}) => expanded ? '1' : '0'};
  font-size: inherit;
`

export const InputAlt = styled.input`
  border: none;
  background: ${({ theme }) => theme.colors.gray.xlight};
  color: ${({ theme }) => theme.colors.gray.dark};
  border-radius: ${({ theme }) => theme.radii.xlarge};
  padding: 0.6em 1em;
  margin-right: 1em;
  transition: transform 0.3s, opacity 0.3s;
  width: 100%;
  transform: ${({expanded}) => expanded ? 'scaleX(1)' : 'scaleX(0)'};
  transform-origin: right;
  opacity: ${({expanded}) => expanded ? '1' : '0'};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.Montserrat};
  height: 100%;
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

