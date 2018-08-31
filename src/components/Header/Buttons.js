import React from 'react'

import { connect } from 'react-redux'
import { createTwoot } from '../../actions/twootActions'

import Button from '@material-ui/core/Button';

import Menu from './Menu'
import Logo from './Logo'

const Buttons = (props) => {
  return (
        <Button color="inherit" onClick={props.createGeorgeTwoot}>Random Quote</Button>
  )
}
export default Buttons;
