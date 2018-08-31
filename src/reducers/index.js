import { combineReducers } from "redux";
import twootReducer from "./twootReducer";
import userProfileReducer from "./userProfileReducer";

export default combineReducers({
  twoots: twootReducer,
  userProfile: userProfileReducer
});
