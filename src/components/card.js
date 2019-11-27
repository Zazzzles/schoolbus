import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'
import IconButton from './icon-button'

const StyledCard = styled.section`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.large};
  margin: 1em 0;
  padding: 1.5em;
  box-shadow: ${props => props.theme.shadows[0]};
  flex: 1;
  ${space}
  ${layout}
  ${flexbox}
`

const StyledCardHeader = styled.header`
  position: relative;
`

const StyledCardDivider = styled.div`
  height: ${props => (props.showDivider ? '1em' : 0)};
  margin: ${props => (props.showDivider ? '0 1em 2em' : 0)};
  border-bottom: ${props =>
    props.showDivider ? `2px solid ${props.theme.colors.gray.xlight}` : 'none'};
`

const StyledCardTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.small};
  font-family: ${props => props.theme.fonts[0]};
  border-left: 5px solid ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.extrabold};
  padding: 0 0.5em;
  text-transform: uppercase;
  letter-spacing: ${props => props.theme.letterSpacings.tight};
  color: ${props => props.theme.colors.gray[4]};
`

const StyledCardDescription = styled.p`
  margin: 1em 1em;
  color: ${props => props.theme.colors.gray[3]};
  font-weight: ${props => props.theme.fontWeights.thin};
  font-size: ${props => props.theme.fontSizes.small};
  padding-right: 5em;
`

const StyledContent = styled.div`
  margin: 1em;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`

const ActionsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
  display: flex;
  align-items: center;
`

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    description: '',
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ...space.propTypes,
    ...layout.propTypes,
    ...flexbox.propTypes,
  }

  static Header = StyledCardHeader

  static Title = StyledCardTitle

  static Description = StyledCardDescription

  static Divider = StyledCardDivider

  static Content = StyledContent

  render() {
    const {
      title,
      description,
      onAdd,
      actions = [],
      viewState,
      renderHeader,
      children,
      hideDivider,
      ...props
    } = this.props

    const showDivider = !hideDivider && title && (!viewState || !!children)

    return (
      <StyledCard {...props}>
        {typeof renderHeader === 'function' ? (
          renderHeader({ title, description })
        ) : (
          <Card.Header>
            <TitleContainer>
              <Card.Title>{title}</Card.Title>
              <ActionsContainer>
                {actions}
                {onAdd && !viewState && (
                  <IconButton onClick={onAdd} />
                )}
              </ActionsContainer>
            </TitleContainer>
            {description.length > 0 && !viewState && (
              <Card.Description>{description}</Card.Description>
            )}
            <Card.Divider showDivider={showDivider} />
          </Card.Header>
        )}
        <Card.Content>{children}</Card.Content>
      </StyledCard>
    )
  }
}

export default Card
