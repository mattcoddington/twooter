import React from 'react'
import styled from 'react-emotion'

const IconContainer = styled('div')`
  background-image: url('icons/icon-${props => props.icon}.svg');
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
`

const Icon = (props) => {
  return (
    <IconContainer icon={props.icon} />
  )
}

export default Icon;
