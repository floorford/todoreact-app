// react redux's connect function
import { connect } from "react-redux";

// import in the Tasks component
import Tasks from "../components/Tasks";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        onSubmit: () => dispatch({ type: "addTask" }),
    };
};
// connect up mapStateToProps with the Tasks component
// Tasks' props are now controlled by this file
export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
