import React from "react";
import { connect } from "react-redux";

import teachers from "../../constants/teachers.json";
import * as actionTypes from "../../constants/actionTypes.js";

class TeacherFilter extends React.Component {
  constructor() {
    super();
    this.changeTeacher = this.changeTeacher.bind(this);
  }
  changeTeacher() {
    const newTeacher = document.getElementById("selectTeacher").value;
    this.props.dispatch({
      type: actionTypes.CHANGE_SELECTED_TEACHER,
      newTeacher: newTeacher
    });
    this.props.dispatch({
      type: actionTypes.FILTER_TABLE_BY_TEACHER,
      teacher: newTeacher
    });
  }
  render() {
    const filteredTeachers = teachers.filter(teacher => {
      return (
        teacher.school === this.props.selectedSchool ||
        this.props.selectedSchool === "any"
      );
    });
    return (
      <div className="filter filter-teacher">
        <select id="selectTeacher" onChange={this.changeTeacher}>
          {filteredTeachers.map((teacher, index) => {
            return (
              <option value={teacher.name} key={index}>
                {teacher.name}
              </option>
            );
          })}
          <option value="any" selected>
            Любой преподаватель
          </option>
        </select>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedSchool: state.selectedSchool
  };
}

export default connect(mapStateToProps)(TeacherFilter);
