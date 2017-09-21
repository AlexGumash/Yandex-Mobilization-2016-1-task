import * as actionTypes from "../../constants/actionTypes.js";
import schedule from "../../api/schedule-interface.json";

const initialState = schedule;

export const table = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_TABLE_BY_SCHOOL:
      const newTable = initialState.filter(lesson => {
        return lesson.school === action.school || action.school === "any";
      });
      return newTable;
    case actionTypes.FILTER_TABLE_BY_TEACHER:
      const newState = initialState.filter(lesson => {
        return lesson.teacher === action.teacher || action.teacher === "any";
      });
      return newState;
    default:
      return state;
  }
};
