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

export const getAllPostsApi = () => {
  return axios.get("/api/posts");
};

export const getPostByIdApi = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};

export const deletePostByIdApi = (token, postId) => {
  return axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });
};

export const createPostApi = (token, postData) => {
  return axios.post(
    "/api/posts",
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const editPostApi = (token, postId, postData) => {
  return axios.post(
    `/api/posts/edit/${postId}`,
    { postData },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const likePostApi = (token, postId) => {
  return axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const dislikePostApi = (token, postId) => {
  return axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const addToBookmarkApi = (token, postId) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};
export const removeFromBookmarkApi = (token, postId) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const getAllBookmarkApi = (token) => {
  return axios.get(`/api/users/bookmark/`, {
    headers: {
      authorization: token,
    },
  });
};

export const getCommentsByPostIdApi = (postId) => {
  return axios.get(`/api/comments/${postId}`);
};

export const addCommentByPostIdApi = (token, data) => {
  return axios.post(
    `/api/comments/add/${data?.id}`,
    { commentData: data?.comment },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const deleteCommentByPostIdCommentIdApi = (token, postId, commentId) => {
  return axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};
