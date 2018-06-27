import React, { Component } from "react";

// import FourOhFour from "../FourOhFour";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
class Task extends Component {

  render() {
    const { task } = this.props;
    return (
      // !article ? <FourOhFour /> : (
      <React.Fragment>
        <p>{ task }</p>
        <button class="btn btn-outline-danger">Delete</button>
        <button class="btn btn-outline-warning">Edit</button>
      </React.Fragment>
    )
  }
}

export default Task;
