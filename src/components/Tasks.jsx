import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Task from '../containers/Task'

// shows a list of articles
class Tasks extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  handleChange(e) {
    let input = e.target.value
    this.setState({
      value: input
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    let data = this.state.value;
    this.props.onSubmit(data);
  }

  render() {
    let { tasks } = this.props;

    return(
      <React.Fragment>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="task">Create a Task</label>
          <input id="task" onChange={ this.handleChange }></input>
          <button className="btn btn-outline-success">Add</button>
        </form>
        { /* check there are articles to show */ }
        { tasks.length ?
          <ul className="list-group">
            { /* map over each article and display a list item for each one */ }
            { tasks.map(task => (
              <li className="list-group-item" key={ task.id }>
              { /* link to the task using its id */ }
                {/* <Link to={ "/tasks/" + task.id }>{ task.title }</Link> */}
                <Task task={ task.task } id={ task.id }/>
              </li>
            ))}
          </ul> :
          <p>No tasks found</p>
        }
      </React.Fragment>
    )
  }
};


export default Tasks;
