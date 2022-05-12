import { LeftSidebar, RightSidebar } from "components";
import { Bookmarks, Explore, Homepage, PageNotFound, Profile } from "pages";
import { Route, Routes } from "react-router-dom";
import {
  ROUTE_BOOKMARKS,
  ROUTE_EXPLORE,
  ROUTE_HOME,
  ROUTE_PROFILE,
} from "utils";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="app flex">
      <LeftSidebar />
      <Routes>
        <Route exact path={ROUTE_HOME} element={<Homepage />} />
        <Route path={ROUTE_EXPLORE} element={<Explore />} />
        <Route path={ROUTE_BOOKMARKS} element={<Bookmarks />} />
        <Route path={ROUTE_PROFILE} element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <RightSidebar />
    </div>
  );
}

export default App;
