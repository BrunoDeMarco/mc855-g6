import axios from "axios";

export const login = (username: string, password: string) => {
  return axios.post(`${process.env.REACT_APP_API_HOST}/session`, {
    username,
    password,
  });
};
