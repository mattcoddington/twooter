// Just using this reducer for simple placeholder data

const initialState = {
  username: '@georgeluvsbosco',
  firstName: 'George',
  lastname: 'Costanza',
  avatarPic: 'images/costanza-profile-pic.jpg'
}

export default function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
}
