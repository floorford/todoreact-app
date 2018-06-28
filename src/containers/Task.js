// react redux's connect function
import { connect } from "react-redux";

// import in the Tasks component
import Tasks from "../components/Task";

import { patchTask, patchTask, deleteTask } from "../data/actions/api";

const mapDispatchToProps = dispatch => {
  return {
    // onSubmit is a function which dispatches an api action "postTask"
    onUpdate: data => dispatch(patchTask(data)),
  };
};
// connect up mapStateToProps with the Tasks component
// Tasks' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Tasks);
