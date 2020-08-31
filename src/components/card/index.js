import * as React from 'react'
import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'

import { space, layout, flexbox } from 'styled-system'
import IconButton from '../icon-button'

import {
  StyledCard,
  StyledCardHeader,
  StyledCardDivider,
  StyledCardTitle,
  StyledCardDescription,
  StyledContent,
  TitleContainer,
  ActionsContainer
} from './styles'

class Card extends React.PureComponent {
  static defaultProps = {
    title: '',
    description: '',
    actions: []
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ...propTypes.space,
    ...propTypes.layout,
    ...propTypes.flexbox,
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
      actions,
      viewState,
      renderHeader,
      children,
      hideDivider,
      ...otherProps
    } = this.props

    const showDivider = !hideDivider && title && (!viewState || !!children)

    return (
      <StyledCard {...otherProps}>
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
            {showDivider && <Card.Divider />}
          </Card.Header>
        )}
        <Card.Content showDivider={showDivider}>{children}</Card.Content>
      </StyledCard>
    )
  }
}

export default Card
