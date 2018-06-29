import React from "react";

// import {
//     Route,
//     Switch,
// } from "react-router-dom";

import Tasks from "./containers/Tasks";

//import FourOhFour from "./components/FourOhFour";

const App = () => (
  <React.Fragment>
    { /* header should show on all pages */ }
    <header><h1 style={{ textAlign: "center" }} className="jumbotron">To Do List</h1></header>
    <Tasks/>
  </React.Fragment>
);

export default App;
