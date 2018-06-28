import React, { Component } from "react";

// import FourOhFour from "../FourOhFour";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
class Task extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false
  }
}


  render() {
    const { task } = this.props;
    const { editing } = this.state;
    return (
      // !article ? <FourOhFour /> : (
      <React.Fragment>
        { editing ?
          <form>
            <label>Task</label>
            <input>{task}</input>
            <button>Update</button>
          </form>
          :
          <p>{ task }</p> }
        <button onClick={ this.handleDelete } className="btn btn-outline-danger">Delete</button>
        <button onClick={ this.handleClick } className="btn btn-outline-warning">Edit</button>
      </React.Fragment>
    )
  }
}

export default Task;
