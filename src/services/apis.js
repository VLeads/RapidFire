import axios from "axios";

export const loginApi = (data) => {
  return axios.post("/api/auth/login", data);
};

export const signupApi = (data) => {
  return axios.post("/api/auth/signup", data);
};

export const getAllUsersApi = () => {
  return axios.get("/api/users");
};

export const followUserApi = (token, id) => {
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

export const unFollowUserApi = (token, id) => {
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

export const getUserApi = (token, id) => {
  return axios.get(`/api/users/${id}`);
};

export const editUserApi = (token, userData) => {
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
