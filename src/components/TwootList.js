import React from 'react'
import { css } from 'emotion'

import { connect } from 'react-redux'
import { fetchTwoots } from '../actions/twootActions'

import Card from './Card';

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

    const twootList = this.props.twoots.map(results =>
      <Card key={results.twootId} className={css`${cardStyle}`}>
        {results.twoot}
      </Card>
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
