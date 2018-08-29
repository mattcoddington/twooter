import React from 'react'
import { css } from 'emotion'

import { connect } from 'react-redux'
import { fetchTwoots } from '../actions/twootActions'

import IndividualTwoot from './IndividualTwoot';

const cardStyle = css`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #EEF3FF;
`

class TwootList extends React.Component {

  componentDidMount() {
    this.props.fetchTwoots()
  }

  render () {

    const twootList = this.props.twoots.sort((a, b) => b.twootId - a.twootId).map(results =>
      <div><IndividualTwoot key={results.twootId} twootContent={results.twoot} twootDate={results.twootDate}/></div>
    )

    return (
      <div>{twootList}</div>
    )
  }
}

const mapStateToProps = state => ({
  twoots: state.twoots
})

export default connect(mapStateToProps, { fetchTwoots })(TwootList);
