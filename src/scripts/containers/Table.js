import React from "react";
import { connect } from "react-redux";

import Lesson from "../components/Lesson.js";

class Table extends React.Component {
  render() {
    return (
      <div className="table">
        <div className="table-content">
          {this.props.table.map((lesson, index) => {
            return (
              <Lesson
                number={index}
                key={index}
                date={lesson.date}
                theme={lesson.theme}
                teacher={lesson.teacher}
                company={lesson.company}
                school={lesson.school}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    table: state.table
  };
}

export default connect(mapStateToProps)(Table);
