import React from "react";

import month from "../../constants/month.json";
import schools from "../../constants/schools.json";

class Lesson extends React.Component {
  render() {
    const school = this.props.school;
    return (
      <div className="lesson">
        <div className="lesson-feature lesson-feature__date">
          {this.props.date.split(".")[0]}{" "}
          {month[this.props.date.split(".")[1] - 1]}
          <div className="school">{schools[school]}</div>
        </div>
        <div className="lesson-feature lesson-feature__theme">
          {this.props.theme}
        </div>
        <div className="lesson-feature lesson-feature__teacher">
          {this.props.teacher} {this.props.company}
        </div>
      </div>
    );
  }
}

export default Lesson;
