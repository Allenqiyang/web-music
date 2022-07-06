import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/children-pages/recommend/store";

const cReducer = combineReducers({
  recommend: recommendReducer
})

export default cReducer