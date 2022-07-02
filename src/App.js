import Mockman from "mockman-js";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  LeftSidebar,
  RequireAuth,
  RestrictAuth,
  RightSidebar,
  WithSidebar,
} from "components";
import {
  Authentication,
  Bookmarks,
  Explore,
  Homepage,
  PageNotFound,
  Profile,
} from "pages";
import {
  ROUTE_BOOKMARKS,
  ROUTE_EXPLORE,
  ROUTE_HOME,
  ROUTE_LANDING,
  ROUTE_PROFILE,
} from "utils";
import "./App.css";
import logo from "./logo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="app" data-theme={theme}>
      <Routes>
        <Route path={ROUTE_LANDING} element={<Authentication />} />
        <Route element={<RequireAuth />}>
          <Route element={<WithSidebar />}>
            <Route exact path={ROUTE_HOME} element={<Homepage />} />
            <Route path={ROUTE_EXPLORE} element={<Explore />} />
            <Route path={ROUTE_BOOKMARKS} element={<Bookmarks />} />
            <Route path={`${ROUTE_PROFILE}`} element={<Profile />} />
            <Route path={`${ROUTE_PROFILE}/:username`} element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
