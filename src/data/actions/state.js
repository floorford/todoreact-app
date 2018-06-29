export const addTask = (task) => {
  return {
    type: "addTask",
    task: task,
  };
};

export const setTasks = (tasks) => {
  return {
    type: "setTasks",
    tasks: tasks,
  };
};

export const editTask = (task) => {
  return {
    type: "editTask",
    task: task,
  };
};

export const removeTask = (id) => {
  return {
    type: "removeTask",
    id: id
  };
};

export const completeTask = (task) => {
  return {
    type: "completeTask", // the type
    task: task // {id: 1, task: "do a thing", completed: 1}
  };
};

//these all take what we got back from the api. All being called in the api actions page as the final dispatch
//these have all been called from the apis, so that we can pass the information into our reducer so that it is able to read it and use it in its switch statement.
