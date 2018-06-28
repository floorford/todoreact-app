import React, { Component } from "react";

// import FourOhFour from "../FourOhFour";

// if article isn't passed in, that means it's an invalid id, so show FourOhFour
class Task extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false,
    value: this.props.task
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
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
  }

  handleDelete(e) {
    // let input = e.target.value
    // this.setState({
    //   value: input
    // })
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = this.state.value;
    this.setState({
      editing: false
    })
    this.props.onUpdate(data);
  }

  render() {
    const { task } = this.props;
    const { editing, value } = this.state;
    return (
      // !article ? <FourOhFour /> : (
      <React.Fragment>
        { editing ?
          <form onSubmit={ this.handleSubmit }>
            <input id="task" onChange={ this.handleChange } value={ value }></input>
            <button className="btn btn-outline-info">Update</button>
          </form>
          :
          <p>{ task }</p> }
        <button onClick={ this.handleDelete } className="btn btn-outline-danger">Delete</button>
        <button onClick={ this.handleEdit } className="btn btn-outline-warning">Edit</button>
      </React.Fragment>
    )
  }
}

export default Task;
