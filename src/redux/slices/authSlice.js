import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "services/apis";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  user: JSON.parse(localStorage?.getItem("user")) || {},
  error: "",
  token: JSON.parse(localStorage?.getItem("token")) || "",
};

export const login = createAsyncThunk("auth/login", (e, data) => {
  return loginApi(
    e.target.value === "guest"
      ? {
          username: "vishalk01234",
          password: "12345678",
        }
      : JSON.stringify(data)
  ).then((response) => response.data);
});

export const signup = createAsyncThunk("auth/signup", (data) => {
  return signupApi(data).then((response) => response.data);
});

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
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.encodedToken)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
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
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.encodedToken)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.createdUser));
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
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
  },
});

export default authSlice.reducer;

export const { logoutHandler } = authSlice.actions;
