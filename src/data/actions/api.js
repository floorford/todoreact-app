import axios from "../axios";

import { addTask, setTasks } from "./state";


export const postTask = (task) => dispatch => {
  axios.post("/tasks", { // send the submitted data from the input from
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
