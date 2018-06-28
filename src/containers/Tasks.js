// react redux's connect function
import { connect } from "react-redux";

// import in the Tasks component
import Tasks from "../components/Tasks";

import { postTask, getTasks } from "../data/actions/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onSubmit is a function which dispatches an api action "postTask"
    onSubmit: data => dispatch(postTask(data)),
    onLoad: () => dispatch(getTasks()),
  };
};
// connect up mapStateToProps with the Tasks component
// Tasks' props are now controlled by this file
export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
