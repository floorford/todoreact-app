import React, { Component } from "react";

// import FourOhFour from "../FourOhFour";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
class Task extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false,
    value: this.props.task.task,
    completed: this.props.task.completed
  }
  //is taking props from tasks component and setting it to value

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleComplete = this.handleComplete.bind(this);
}

  handleEdit() {
    this.setState({
      editing: true,
    })
  }

  handleChange(e) {
    let input = e.target.value
    this.setState({
      value: input
    })
  }//looks at hat the user types and saves it as value

  handleDelete(e) {
    this.props.onDelete();
  }
  //these methods are doing soem logic and then passing through our methods from the container.

  handleSubmit(e) {
    e.preventDefault();
    //taking whatever the user has typed and set it to data.
    let data = this.state.value;
    this.setState({
      editing: false
    })
    this.props.onUpdate(data);
  }

  handleComplete(e) {
    let complete = !this.state.completed //

    this.setState({
      completed: complete //toggles between the two options for completed and not completed and sets to state
    })

    this.props.onComplete(complete);
  }

  render() {
    const { task } = this.props;
    const { editing, value, completed } = this.state;

    let colour = completed ? "grey" : "black";

    return (
      // !article ? <FourOhFour /> : (
      <React.Fragment>
        <input onChange={ this.handleComplete } type="checkbox" checked={ completed }></input>
        { editing ?
          <form onSubmit={ this.handleSubmit }>
            <input id="task" onChange={ this.handleChange } value={ value }></input>
            <button className="btn btn-outline-info">Update</button>
          </form>
          :
          <p style={{color: colour}}>{ task.task }</p> }
        <button onClick={ this.handleDelete } className="btn btn-outline-danger">Delete</button>
        <button onClick={ this.handleEdit } className="btn btn-outline-warning">Edit</button>
      </React.Fragment>
    )
  }
}

export default Task;
