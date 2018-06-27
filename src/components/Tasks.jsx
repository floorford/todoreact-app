import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Task from './Task'

// shows a list of articles
class Tasks extends Component {
  constructor (props) {
      super(props);
      this.handleSubmit=this.handleSubmit.bind(this);
  }


  render() {
    let { tasks, onSubmit } = this.props;

    handleSubmit(e) {


      this.props.onSubmit(data);
    }
    
    return(
      <React.Fragment>
        <button onSubmit={ this.handleSubmit } class="btn btn-outline-success">Add</button>
        { /* check there are articles to show */ }
        { tasks.length ?
          <ul className="list-group">
            { /* map over each article and display a list item for each one */ }
            { tasks.map(task => (
              <li className="list-group-item" key={ task.id }>
              { /* link to the task using its id */ }
                {/* <Link to={ "/tasks/" + task.id }>{ task.title }</Link> */}
                <Task task={ task.task } />
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
