// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import missionsReducer from "./missions/missions.slice";
import shavtzakReducer from "./shavtzak/shavtzak.slice";
import peopleReducer from "./people/people.slice";

const rootReducer = combineReducers({
  missions: missionsReducer,
  shavtzak: shavtzakReducer,
  people: peopleReducer,
});

export default rootReducer;
