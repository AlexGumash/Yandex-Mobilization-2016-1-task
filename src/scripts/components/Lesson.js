import React from "react";

import month from "../../constants/month.json";
import schools from "../../constants/schools.json";
import * as styles from "../../constants/styles.js";
import schedule from "../../api/schedule-interface.json";

class Lesson extends React.Component {
  constructor() {
    super();
    this.state = {
      lessonStyle: styles.normalLesson
    };
  }
  changeStyle(lessonStyle) {
    if (lessonStyle === styles.heilightLesson) {
      this.setState({
        lessonStyle: styles.normalLesson
      });
    } else if (lessonStyle === styles.normalLesson) {
      this.setState({
        lessonStyle: styles.heilightLesson
      });
    }
  }

  componentWillMount() {
    if (
      this.props.number > 0 &&
      schedule[this.props.number - 1].date !== this.props.date
    ) {
      this.changeStyle(this.state.lessonStyle);
    }
  }

  render() {
    const school = this.props.school;
    return (
      <div className="lesson" style={this.state.lessonStyle}>
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
