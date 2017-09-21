import React from "react";
import { connect } from "react-redux";

import schools from "../../constants/schools.json";
import * as actionTypes from "../../constants/actionTypes.js";

class SchoolFilter extends React.Component {
  constructor() {
    super();
    this.changeSchool = this.changeSchool.bind(this);
  }
  changeSchool() {
    const newSchool = document.getElementById("selectSchool").value;
    this.props.dispatch({
      type: actionTypes.CHANGE_SELECTED_SCHOOL,
      newSchool: newSchool
    });
    this.props.dispatch({
      type: actionTypes.FILTER_TABLE_BY_SCHOOL,
      school: newSchool
    });
  }
  render() {
    return (
      <div className="filter filter-school">
        <select id="selectSchool" onChange={this.changeSchool}>
          {Object.keys(schools).map((key, index) => {
            if (index < 3) {
              return (
                <option key={index} value={key}>
                  {schools[key]}
                </option>
              );
            } else {
              return null;
            }
          })}
          <option selected value="any" onClick={this.kek}>
            Любая школа
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

export default connect(mapStateToProps)(SchoolFilter);
