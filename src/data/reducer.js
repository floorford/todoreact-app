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

const editTask = (state, {id, task}) => {

  let list = state.tasks.slice()

  let newTasks = list.map(listItem => {
    if (listItem.id === task.id) {
      return task
    } else {
      return listItem
    }
  })

  return {
    ...state,
    tasks: newTasks
  };
};

const removeTask = (state, { id }) => {
  let list = state.tasks.slice()

  let newTasks = list.filter(listItem => listItem.id !== id)

  return {
    ...state,
    tasks: newTasks
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": return addTask(state, action);
    case "setTasks": return setTasks(state, action);
    case "editTask": return editTask(state, action);
    case "removeTask": return removeTask(state, action);
    default: return state;
  }
};

export default reducer
