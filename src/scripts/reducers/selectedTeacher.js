import * as actionTypes from "../../constants/actionTypes.js";

const initialState = "any";

export const selectedTeacher = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SELECTED_TEACHER:
      const newTeacher = action.newTeacher;
      return newTeacher;
    default:
      return state;
  }
};
