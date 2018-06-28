const addTask = (state, {task}) => {
  return {
    ...state,
    tasks: state.tasks.concat(task)
  };
};

const setTasks = (state, {tasks}) => {
  return {
    ...state,
    tasks: tasks
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": return addTask(state, action);
    case "setTasks": return setTasks(state, action);
    default: return state;
  }
};

export default reducer
