import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'react-emotion'

const CardContainer = styled('div')`
  padding: 16px;
  background-color: ${props => props.backgroundColor};
  margin: 12px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.04),
    0px 1px 1px 0px rgba(0, 0, 0, 0.08),
    0px 2px 1px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`

class Card extends React.Component {

  render () {

    return (
      <CardContainer backgroundColor={(() => {if (this.props.backgroundColor) {return this.props.backgroundColor} else return "#fff"})()}>
        {this.props.children}
      </CardContainer>
    )
  }
}

export default Card
