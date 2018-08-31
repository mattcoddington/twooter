import { FETCH_TWOOTS, NEW_TWOOT, RANDOM_GEORGE_TWOOT } from "./types";
import moment from "moment";

import store from "../store";

// Using just a simple counter to create unique ID's for each twoot
let totalTwoots = 1;

// fetchTwoots action creator would retrieve initial list of twoots. For demo purposes it's just passing along some static content
export const fetchTwoots = () => dispatch => {
  dispatch({
    type: FETCH_TWOOTS,
    payload: {
      twootId: totalTwoots++,
      twootAuthor: "Matt",
      twootDate: "Aug 24, 2018",
      twoot: "This is the first twoot"
    }
  });
};

// createTwoot action creator adds a new twoot to the list of existing twoots. In a production app this is where I'd post back to the server.
export const createTwoot = twootData => dispatch => {
  dispatch({
    type: NEW_TWOOT,
    payload: {
      twootId: totalTwoots++,
      twootAuthor: store.getState().userProfile.username,
      twootDate: moment().format("ll"),
      twoot: twootData
    }
  });
};

// randomGeorgeTwoot pulls a random quote from George Costanza and adds it to the list of twoots. Added this so it'd be easier to generate a bunch of twoots that look natural without having to type.
// This action creator is also fetching an external api. An improvement I might add to the backlog for this app if I were going to support it would be to break out some of these steps into different actions so I'd be able ot render different UI for each stage.
export const randomGeorgeTwoot = () => dispatch => {
  fetch("https://seinfeld-quotes.herokuapp.com/quotes")
    .then(res => res.json())
    .then(data => {
      var georgeQuotes = data.quotes.filter(author => {
        return author.author === "George";
      });
      dispatch({
        type: RANDOM_GEORGE_TWOOT,
        payload: {
          twootId: totalTwoots++,
          twootAuthor: store.getState().userProfile.username,
          twootDate: moment().format("ll"),
          twoot:
            georgeQuotes[Math.floor(Math.random() * georgeQuotes.length)].quote
        }
      });
    });
};
