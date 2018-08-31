import { FETCH_TWOOTS, NEW_TWOOT, RANDOM_GEORGE_TWOOT } from './types'
import moment from 'moment'

import store from '../store';

let totalTwoots = 1

// data.quotes[Math.floor(Math.random() * data.quotes.length)].quote

export const fetchTwoots = () => dispatch => {
  dispatch({
    type: FETCH_TWOOTS,
    payload:
    {
      twootId: totalTwoots++,
      twootAuthor: 'Matt',
      twootDate: 'Aug 24, 2018',
      twoot: 'This is the first twoot'
    }
  })
}

export const createTwoot = (twootData) => dispatch => {
  dispatch({
    type: NEW_TWOOT,
    payload:
    {
      twootId: totalTwoots++,
      twootAuthor: store.getState().userProfile.username,
      twootDate: moment().format('ll'),
      twoot: twootData
    }
  })
}

export const randomGeorgeTwoot = () => dispatch => {
  fetch('https://seinfeld-quotes.herokuapp.com/quotes')
  .then(res => res.json())
  .then((data) => {
      var georgeQuotes = data.quotes.filter(author => {
        return author.author === 'George'
      })
    dispatch({
      type: RANDOM_GEORGE_TWOOT,
      payload:
      {
        twootId: totalTwoots++,
        twootAuthor: store.getState().userProfile.username,
        twootDate: moment().format('ll'),
        twoot: georgeQuotes[Math.floor(Math.random() * georgeQuotes.length)].quote
      }
    })
  })
}
