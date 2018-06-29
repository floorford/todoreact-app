import axios from "../axios";

import { addTask, setTasks, editTask, removeTask, completeTask } from "./state";


export const postTask = (task) => dispatch => {
  axios.post("/tasks", { // send the submitted data from the input form
    task: task, // task: is what the database is expecting to receive
  }).then(({ data }) => { //returns a json object with a data object inside
    const task = data.data; //getting the data object inside and assigning it to task
    dispatch(addTask(task)); // sending that object to our state action
  });
};

export const getTasks = () => dispatch => {
  axios.get("/tasks").then(({ data }) => {
    const tasks = data; //getting the data object inside and assigning it to task
    dispatch(setTasks(tasks)); // sending that object to our state action
  });
};

export const patchTask = (data, id) => dispatch => {
  axios.patch(`/tasks/${id}`, {
    task: data
  }).then(({ data }) => {
    const task = data.data; //getting the data object inside and assigning it to task
    dispatch(editTask(task)); // sending that object to our state action
  });
};

export const deleteTask = (id) => dispatch => {
  axios.delete(`/tasks/${id}`).then(() => {
    dispatch(removeTask(id)); // sending that object to our state action
  });
};

export const patchTaskComplete = (status, id) => dispatch => {
  axios.patch(`/tasks/${id}/complete`, {
    completed: status
  }).then(({ data }) => {
    let task = data.data
    dispatch(completeTask(task)); // sending that object to our state action
  });
};

//these are all API actions, that we name. they take argument and then are dispatched.
//Axios is the middlewear we use to talk to our db from our app.
//We pass it what it needs to know in order to do what it needs to do (arguments)
//
