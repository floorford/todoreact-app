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

const editTask = (state, {task}) => {
  let list = state.setTasks.slice

  list.filter(listItem => {
    if (listItem.id === task.id) {
      listItem.task = task.tasks
    }
  })
  return {
    ...state,
    tasks: [
      ...state.tasks,
      {
        id: [task.id],
        task: task.task
      }
    ]
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": return addTask(state, action);
    case "setTasks": return setTasks(state, action);
    case "editTask": return editTask(state, action);
    default: return state;
  }
};

export default reducer
