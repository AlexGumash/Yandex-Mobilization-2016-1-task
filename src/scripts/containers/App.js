import React from "react";

import Table from "./Table.js";
import Filter from "./Filter.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Filter />
        <Table />
      </div>
    );
  }
}

export default App;
