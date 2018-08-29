import { FETCH_TWOOTS, NEW_TWOOT } from './types'
import moment from 'moment'

let totalTwoots = 1

export const fetchTwoots = () => dispatch => {
  dispatch({
    type: FETCH_TWOOTS,
    payload:
    {
      twootId: totalTwoots++,
      twootAuther: 'Matt',
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
      twootAuther: 'Matt',
      twootDate: moment().format('ll'),
      twoot: twootData
    }
  })
}
