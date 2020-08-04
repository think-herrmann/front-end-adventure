import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const storyEvents = createSlice({
  name: "storyEvents",
  initialState: { hasHeadband: false, hasMap: false, hasFreedPrisoners: false },
  reducers: {
    pickupHeadband(state, action) {
      state.hasHeadband = true;
    },
    pickupMap(state, action) {
      state.hasMap = true;
    },
    freePrisoners(state, action) {
      state.freePrisoners = true;
    },
  },
});

// TODO: Implement this reducer to store the path the
// user takes through the story
const userPath = ({
  name: "userPath",
  initialState: null,
  reducers: {}
})

const { actions, reducer } = storyEvents;

export const { pickupHeadband, pickupMap, freePrisoners } = actions;

const rootReducer = {
  storyEvents: reducer,
};

export default rootReducer;
