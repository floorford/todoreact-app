//this is where we create our functings that as passed into the switch statment
const addTask = (state, {task}) => {
  return {
    ...state,
    tasks: state.tasks.concat(task)
  };
};
//they take state and whatever information we've passed into state action
//sometimes take a copy of state and ALWAYS returns something with the state changed in some way

const setTasks = (state, {tasks}) => {
  return {
    ...state,
    tasks: tasks
  };
};
//

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

const completeTask = (state, {id, task, completed}) => {

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

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": return addTask(state, action);
    case "setTasks": return setTasks(state, action);
    case "editTask": return editTask(state, action);
    case "removeTask": return removeTask(state, action);
    case "completeTask": return completeTask(state, action);
    default: return state;
  }
};

export default reducer
