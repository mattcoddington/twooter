import React from "react";

import Card from "./Card";
import Avatar from "./Avatar";
import Icon from "./Icon";

import styled from "react-emotion";

const TwootContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-start: start;
`;
const MetaLine = styled("div")`
  font-size: 0.75em;
  margin-bottom: 10px;
`;
const TwootBody = styled("div")`
  margin-left: 10px;
`;
const IconContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
  max-width: 200px;
  margin-top: 20px;
`;

const IndividualTwoot = props => {
  return (
    <Card>
      <MetaLine>
        <strong>George Costanza</strong> @boscogeorge - {props.twootDate}
      </MetaLine>

      <TwootContainer>
        <Avatar size="extra-small" />
        <TwootBody>{props.twootContent}</TwootBody>
      </TwootContainer>

      <hr />

      {/* These icons are just static placehodlers for some visual flare */}
      <IconContainer>
        <Icon icon="comment" />
        <Icon icon="retwoot" />
        <Icon icon="heart" />
        <Icon icon="email" />
      </IconContainer>
    </Card>
  );
};

export default IndividualTwoot;
