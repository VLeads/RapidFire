import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllUsersApi,
  unFollowUserApi,
  followUserApi,
  getUserApi,
  editUserApi,
} from "services/apis";
import { editUser } from "./authSlice";

const initialState = {
  usersData: [],
  loading: "idle",
  selectedUser: {},
  error: null,
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", () => {
  return getAllUsersApi().then((response) => response.data);
});

export const getUser = createAsyncThunk(
  "users/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getUserApi(id);

      return response.data;
    } catch (error) {
      console.log("getuser-error", id, error.response);
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = "loading";
      state.usersData = [];
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.usersData = action.payload.users;
      state.loading = "success";
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
      state.loading = "failed";
      state.usersData = [];
      state.error = action.error;
    });

    builder.addCase(getUser.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.selectedUser = action.payload.user;
      state.loading = "success";
      state.error = null;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
      state.selectedUser = {};
      state.loading = "failed";
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
