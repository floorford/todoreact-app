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
