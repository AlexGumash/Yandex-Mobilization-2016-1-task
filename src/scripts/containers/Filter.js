import React from "react";

import SchoolFilter from "../components/SchoolFilter.js";
import DateFilter from "../components/DateFilter.js";
import TeacherFilter from "../components/TeacherFilter.js";

class Filter extends React.Component {
  render() {
    return (
      <div className="tableFilter">
        <form>
          <SchoolFilter />
          <TeacherFilter />
          <DateFilter />
          <button>Найти</button>
        </form>
      </div>
    );
  }
}

export default Filter;
