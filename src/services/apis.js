import axios from "axios";

const token = localStorage.getItem("token");

export const loginApi = (data) => {
  return axios.post("/api/auth/login", data);
};

export const signupApi = (data) => {
  return axios.post("/api/auth/signup", data);
};

export const getAllUsersApi = () => {
  return axios.get("/api/users");
};

export const followUserApi = (id) => {
  return axios.post(
    `/api/users/follow/${id}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const unFollowUserApi = (id) => {
  console.log("id", id);
  return axios.post(
    `/api/users/unfollow/${id}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const getUserApi = (id) => {
  return axios.get(`/api/users/${id}`);
};

export const editUserApi = (userData) => {
  return axios.post(
    `/api/users/edit`,
    { userData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};
