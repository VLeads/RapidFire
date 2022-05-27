import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addCommentByPostIdApi,
  createPostApi,
  deleteCommentByPostIdCommentIdApi,
  deletePostByIdApi,
  dislikePostApi,
  editPostApi,
  getAllPostsApi,
  getCommentsByPostIdApi,
  getPostByIdApi,
  likePostApi,
} from "services/apis";

const initialState = {
  loading: "idle",
  posts: [],
  currentPost: null,
  postActionLoading: "idle",
  error: "",
};

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (temp, { rejectWithValue }) => {
    try {
      const response = await getAllPostsApi();
      return response.data.posts.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// create post

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await createPostApi(token, postData);

      return response.data.posts.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// edit Post

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (postData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await editPostApi(token, postData._id, postData);

      return response.data.posts.reverse();
    } catch (error) {
      console.log("error-payload", postData);
      return rejectWithValue(error);
    }
  }
);

// like post
export const likePost = createAsyncThunk(
  "posts/likePost",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await likePostApi(token, postId);

      return response.data.posts.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// dislike post
export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await dislikePostApi(token, postId);

      return response.data.posts.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/getPost",
  async (postId, { rejectWithValue }) => {
    try {
      const response = await getPostByIdApi(postId);
      return response.data.post;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await deletePostByIdApi(token, postId);

      return response.data.posts?.reverse();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// get comments
export const getCommentsByPostId = createAsyncThunk(
  "posts/getCommentsByPostId",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await getCommentsByPostIdApi(token, postId);

      return response.data.comments?.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete comments
export const deleteCommentByPostIdCommentId = createAsyncThunk(
  "posts/deleteCommentByPostIdCommentId",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await deleteCommentByPostIdCommentIdApi(
        token,
        postId,
        commentId
      );

      return response.data.posts?.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// add Comment
export const addCommentByPostId = createAsyncThunk(
  "posts/addCommentByPostId",
  async (data, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await addCommentByPostIdApi(token, data);
      toast.success("comment added!");

      return response.data.posts?.reverse();
    } catch (error) {
      console.log("error-payload", data);
      return rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //   get All Posts
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = "success";
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.error = action.error;
      state.loading = "rejected";
    });

    //   get Posts
    builder.addCase(getPost.pending, (state) => {
      state.postActionLoading = "loading";
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.postActionLoading = "success";
      state.currentPost = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.error = action.error;
      state.postActionLoading = "rejected";
    });

    // deletePost

    builder.addCase(deletePost.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.error = action.error;
      state.loading = "rejected";
    });

    // create post

    builder.addCase(createPost.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
      toast.success("Post created!");
    });
    builder.addCase(createPost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });

    // edit post

    builder.addCase(editPost.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
      toast.success("Post Edited!");
    });
    builder.addCase(editPost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });

    // likePost

    builder.addCase(likePost.pending, (state) => {
      state.postActionLoading = "loading";
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.postActionLoading = "success";
      toast.success("liked post!");
    });
    builder.addCase(likePost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.postActionLoading = "rejected";
    });

    // dislikePost

    builder.addCase(dislikePost.pending, (state) => {
      state.postActionLoading = "loading";
    });
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.postActionLoading = "success";
      toast.success("unliked post!");
    });
    builder.addCase(dislikePost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.postActionLoading = "rejected";
    });

    // get comment
    builder.addCase(getCommentsByPostId.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
    });
    builder.addCase(getCommentsByPostId.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });

    // delete comment
    builder.addCase(deleteCommentByPostIdCommentId.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(
      deleteCommentByPostIdCommentId.fulfilled,
      (state, action) => {
        state.posts = action.payload;
        state.loading = "success";
        toast.success("Comment deleted!");
      }
    );
    builder.addCase(
      deleteCommentByPostIdCommentId.rejected,
      (state, action) => {
        console.log("action-error", action);
        state.error = action.error;
        state.loading = "rejected";
      }
    );

    // add comment
    builder.addCase(addCommentByPostId.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(addCommentByPostId.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = "success";
    });
    builder.addCase(addCommentByPostId.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });
  },
});

export default postSlice.reducer;
