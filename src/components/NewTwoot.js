import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import { connect } from 'react-redux'
import { createTwoot } from '../actions/twootActions'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';

const cardStyle = css`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #EEF3FF;
`

const twootInput = css`
  width: 100%;
`

class NewTwoot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newTwoot: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    if (this.state.newTwoot != '') {
      this.props.createTwoot(this.state.newTwoot)
    }

    this.setState({
      newTwoot: ''
    })

  }

  render () {

    return (
      <Card className={css`${cardStyle};`}>
          <CardContent>
              <form onSubmit={this.handleOnSubmit}>
                <div>
                    <FormControl className={css`${twootInput}`}>
                      <InputLabel htmlFor="name-simple">What's twootin?</InputLabel>
                      <Input multiline={true} name='newTwoot' value={this.state.newTwoot} onChange={this.handleOnChange} />
                    </FormControl>
                </div>
                <br />
                <Button type='submit' size="large" variant="contained" color="primary">Twoot it!</Button>
              </form>
          </CardContent>
      </Card>
    )
  }
}

export default connect(null, { createTwoot })(NewTwoot);
