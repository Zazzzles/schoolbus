import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'

export const StyledCard = styled.section`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.radii.large};
  margin: 1em 0;
  padding: 1.5em;
  box-shadow: ${({theme}) => theme.shadows[0]};
  flex: 1;
  ${space}
  ${layout}
  ${flexbox}
`

export const StyledCardHeader = styled.header`
  position: relative;
`

export const StyledCardDivider = styled.div`
  height: '1em';
  margin: '0 1em 2em';
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray.xlight}`};
`

export const StyledCardTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.small};
  font-family: ${({theme}) => theme.fonts.Montserrat};
  border-left: 5px solid ${({theme}) => theme.colors.primary};
  font-weight: ${({theme}) => theme.fontWeights.extrabold};
  padding: 0 0.5em;
  text-transform: uppercase;
  letter-spacing: ${({theme}) => theme.letterSpacings.tight};
  color: ${({theme}) => theme.colors.gray[4]};
`

export const StyledCardDescription = styled.p`
  margin: 1em 1em;
  color: ${({theme}) => theme.colors.gray[3]};
  font-weight: ${({theme}) => theme.fontWeights.thin};
  font-size: ${({theme}) => theme.fontSizes.small};
  padding-right: 5em;
`

export const StyledContent = styled.div`
  margin: 1em;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`

export const ActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  align-items: center;
`