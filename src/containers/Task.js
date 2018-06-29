// react redux's connect function
import { connect } from "react-redux";

// import in the Task component
import Task from "../components/Task";

import { patchTask, patchTaskComplete, deleteTask } from "../data/actions/api";

const mapDispatchToProps = (dispatch, {task}) => {
  return {
    // onUpdate is a function which dispatches an api action "patchTask"
    onUpdate: data => dispatch(patchTask(data, task.id)),
    onDelete: () => dispatch(deleteTask(task.id)),
    onComplete: status => dispatch(patchTaskComplete(status, task.id)),
  };
};
// connect up mapStateToProps with the Task component
// Tasks' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Task);
