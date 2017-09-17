import React from "react";

import Lesson from "../components/Lesson.js";

import schedule from "../../api/schedule-interface.json";

class Table extends React.Component {
  render() {
    return (
      <div className="table">
        <div className="table-header">
          <div className="table-header-item table-header-item__date">Дата</div>
          <div className="table-header-item table-header-item__theme">Тема</div>
          <div className="table-header-item table-header-item__teacher">
            Преподаватель
          </div>
        </div>
        <div className="table-content">
          {schedule.map((lesson, index) => {
            return (
              <Lesson
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

export default Table;
