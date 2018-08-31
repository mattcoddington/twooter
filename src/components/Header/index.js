import React from 'react'

import { connect } from 'react-redux'
import { randomGeorgeTwoot } from '../../actions/twootActions'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Menu from './Menu'
import Logo from './Logo'
import Buttons from './Buttons'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTwoot: ''
    }
  }

  createGeorgeTwoot = (e) => {
    this.props.randomGeorgeTwoot()
  }

  render () {

      return (
      <AppBar position="sticky">
        <Toolbar>
          <Menu />
          <Logo />
          <Buttons createGeorgeTwoot={this.createGeorgeTwoot}/>
        </Toolbar>
      </AppBar>
    )
  }
}
export default connect(null, { randomGeorgeTwoot })(Header);
