import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  addToBookmarkApi,
  getAllBookmarkApi,
  removeFromBookmarkApi,
} from "services/apis";

const initialState = {
  bookmarks: [],
  loading: "idle",
  error: "",
};

// bookmark post

export const addToBookmarkPost = createAsyncThunk(
  "bookmarks/addToBookmarkPost",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await addToBookmarkApi(token, postId);

      return response.data.bookmarks.reverse();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// remove bookmark post
export const removeFromBookmarkPost = createAsyncThunk(
  "bookmarks/removeFromBookmarkPost",
  async (postId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await removeFromBookmarkApi(token, postId);

      return response.data.bookmarks;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// get all bookmark post
export const getAllBookmarkPost = createAsyncThunk(
  "bookmarks/getAllBookmarkPost",
  async (tempdata, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await getAllBookmarkApi(token);

      return response.data.bookmarks;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add to bookmark post
    builder.addCase(addToBookmarkPost.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(addToBookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
      state.loading = "success";
      toast.success("Added to bookmarks!");
    });
    builder.addCase(addToBookmarkPost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });

    // remove from bookmark post
    builder.addCase(removeFromBookmarkPost.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(removeFromBookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
      state.loading = "success";
      toast.success("Removed From Bookmarks!");
    });
    builder.addCase(removeFromBookmarkPost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });

    // get all bookmark post
    builder.addCase(getAllBookmarkPost.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getAllBookmarkPost.fulfilled, (state, action) => {
      state.bookmarks = action.payload;
      state.loading = "success";
    });
    builder.addCase(getAllBookmarkPost.rejected, (state, action) => {
      console.log("action-error", action);
      state.error = action.error;
      state.loading = "rejected";
    });
  },
});

export default bookmarkSlice.reducer;
