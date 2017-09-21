import * as actionTypes from "../../constants/actionTypes.js";

export const selectedSchool = (state = "any", action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SELECTED_SCHOOL:
      const newSchool = action.newSchool;
      return newSchool;
    default:
      return state;
  }
};
