import axios from "axios";

export default axios.create({
  baseURL: "http://homestead.test/api/",
  headers: {
    Accept: "application/json",
  },
});
//axios allows us to talk to the api
