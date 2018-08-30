import React from 'react'
import styled from 'react-emotion'

const determineCardType = string => {
  switch (string) {
    case "newTwoot":
       return "#EEF3FF"
   default:
     return "#fff"
  }
}

const CardContainer = styled('div')`
  background-color: ${props => determineCardType(props.cardType)};
  margin: 12px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.04),
    0px 1px 1px 0px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  position: ${props => props.isProfileCard ? 'sticky' : 'relative'};
  top: ${props => props.isProfileCard ? '76px' : '0'};
`

const CardContent = styled(`div`)`
  padding: 16px;
`

class Card extends React.Component {
  render () {
    return (
      <CardContainer cardType={this.props.cardType} isProfileCard={this.props.isProfileCard}>
        <CardContent>{this.props.children}</CardContent>
      </CardContainer>
    )
  }
}

export default Card;
