import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { LeftSidebar, RightSidebar } from "components";

export const WithSidebar = () => {
  return (
    <div className={`${styles.mainContainer} flex`}>
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};
