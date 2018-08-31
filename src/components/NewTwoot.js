import React from "react";
import { css } from "emotion";

import { connect } from "react-redux";
import { createTwoot } from "../actions/twootActions";

import Card from "./Card";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import Button from "@material-ui/core/Button";

const twootInput = css`
  width: 100%;
`;

class NewTwoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTwoot: ""
    };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.newTwoot.trim()) {
      this.props.createTwoot(this.state.newTwoot);
    }
    this.setState({
      newTwoot: ""
    });
  };

  render() {
    return (
      <Card cardType="newTwoot">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <FormControl
              className={css`
                ${twootInput};
              `}
            >
              <InputLabel htmlFor="name-simple">What's twootin?</InputLabel>
              <Input
                multiline={true}
                name="newTwoot"
                value={this.state.newTwoot}
                onChange={this.handleOnChange}
              />
            </FormControl>
          </div>
          <br />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            color="primary"
          >
            Twoot it!
          </Button>
        </form>
      </Card>
    );
  }
}

export default connect(
  null,
  { createTwoot }
)(NewTwoot);
