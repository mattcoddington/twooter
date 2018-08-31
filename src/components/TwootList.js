import React from "react";

import { connect } from "react-redux";
import { fetchTwoots } from "../actions/twootActions";

import IndividualTwoot from "./IndividualTwoot";

class TwootList extends React.Component {
  componentDidMount() {
    this.props.fetchTwoots();
  }

  render() {
    const twootList = this.props.twoots
      .sort((a, b) => b.twootId - a.twootId)
      .map(results => (
        <div key={results.twootId}>
          <IndividualTwoot
            twootContent={results.twoot}
            twootDate={results.twootDate}
          />
        </div>
      ));

    return <div>{twootList}</div>;
  }
}

const mapStateToProps = state => ({
  twoots: state.twoots
});

export default connect(
  mapStateToProps,
  { fetchTwoots }
)(TwootList);
