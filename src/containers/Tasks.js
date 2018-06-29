// react redux's connect function
import { connect } from "react-redux";

// import in the Tasks component
import Tasks from "../components/Tasks";

import { postTask, getTasks } from "../data/actions/api";

// We're taking the tasks array from the global state and assigning it to a taks property which will be passed to the tasks component through maps state to props.
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onSubmit is a function which dispatches an api action "postTask"
    //taking the data (the value of the input) and passing it into posttaks action
    onSubmit: data => dispatch(postTask(data)),
    onLoad: () => dispatch(getTasks()),
    //dispatching get tasks api action

  };
};
// connect up mapStateToProps with the Tasks component
// Tasks' props are now controlled by this file
export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
