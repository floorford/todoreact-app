import axios from "../axios";

import { addTask } from "./state";


export const postTask = ({ task }) => dispatch => {
  axios.post("/tasks", {
    task: task,
  }).then(({ data }) => {
    console.log(data)
    // const article = data.data;
    // dispatch(addTask(article));
  });
};
