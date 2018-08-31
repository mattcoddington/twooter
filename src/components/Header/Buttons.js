import React from "react";

import Button from "@material-ui/core/Button";

const Buttons = props => {
  return (
    <Button color="inherit" onClick={props.createGeorgeTwoot}>
      Random Quote
    </Button>
  );
};
export default Buttons;
