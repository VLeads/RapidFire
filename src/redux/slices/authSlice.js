import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  editUserApi,
  followUserApi,
  loginApi,
  signupApi,
  unFollowUserApi,
} from "services/apis";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  user: JSON.parse(localStorage.getItem("social-user")) || {},
  error: "",
  token: JSON.parse(localStorage.getItem("social-token")) || "",
};

export const login = createAsyncThunk("auth/login", (e, data) => {
  return loginApi(
    e.target.value === "guest"
      ? {
          username: "Vishalk01234",
          password: "12345678",
        }
      : data
  ).then((response) => response.data);
});

export const signup = createAsyncThunk("auth/signup", (data) => {
  return signupApi(data).then((response) => response.data);
});

export const editUser = createAsyncThunk(
  "auth/editUser",
  async (userData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("social-token");
      const response = await editUserApi(token, userData);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const followUser = createAsyncThunk(
  "auth/followUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("social-token");
      const response = await followUserApi(token, id);
      toast.success("followed");
      return response.data.followUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  "auth/unFollowUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("social-token");
      const response = await unFollowUserApi(token, id);

      toast.success("unfollowed");
      return response.data.followUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: () => {
      localStorage.clear();
      return {
        user: null,
        token: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.encodedToken;
      localStorage.setItem("social-token", JSON.stringify(state.token));

      state.user = action.payload.foundUser;

      localStorage.setItem("social-user", JSON.stringify(state.user));
      toast.success("LoggedIn successfully");
      state.loading = "success";
      state.error = "";
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = "rejected";
      state.user = {};
      state.error = action.error.message;
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.token = action.payload.encodedToken;
      localStorage.setItem(
        "social-token",
        JSON.stringify(action.payload.encodedToken)
      );
      state.user = action.payload.createdUser;
      localStorage.setItem("social-user", JSON.stringify(state.user));
      toast.success("LoggedIn successfully");
      state.loading = "success";
      state.error = "";
    });

    builder.addCase(signup.rejected, (state, action) => {
      state.loading = "rejected";
      state.user = {};
      state.error = action.error.message;
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
    });

    builder.addCase(editUser.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("social-user", JSON.stringify(state.user));
      state.status = "success";
      state.error = "";
      toast.success("updated successfully");
    });

    builder.addCase(editUser.rejected, (state, action) => {
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
      state.status = "rejected";
      state.error = action.error;
    });

    builder.addCase(followUser.fulfilled, (state, action) => {
      state.user.following = [...state.user.following, action.payload];
      state.status = "fulfilled";
      state.error = "";
    });

    builder.addCase(followUser.rejected, (state, action) => {
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
      state.error = action.error;
      state.status = "rejected";
    });

    builder.addCase(unFollowUser.fulfilled, (state, action) => {
      state.user.following = state.user.following.filter(
        (item) => item.username !== action.payload?.username
      );
      state.error = "";
      state.status = "fulfilled";
    });

    builder.addCase(unFollowUser.rejected, (state, action) => {
      toast.error(
        action.error.message.slice(0, 41) +
          (action.error.message.length > 41 ? "..." : "")
      );
      state.loading = "rejected";
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;

export const { logoutHandler } = authSlice.actions;
