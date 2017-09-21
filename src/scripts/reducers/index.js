import { combineReducers, createStore } from "redux";

import { selectedSchool } from "./selectedSchool";
import { selectedTeacher } from "./selectedTeacher";
import { table } from "./table";

const rootReducer = combineReducers({
  selectedSchool,
  selectedTeacher,
  table
});

const store = createStore(rootReducer);

export default store;
