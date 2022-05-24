import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import postReducer from "./slices/postSlice";
import bookmarkReducer from "./slices/bookmarkSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
