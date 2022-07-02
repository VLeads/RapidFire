import React from "react";
import styles from "./comment.module.css";
import placeholder from "assets/images/placeholder.png";
import { useSelector } from "react-redux";

export const Comment = ({ avatar, displayName, username, msg }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={styles.commentContainer}>
      <div className={styles.userPic}>
        {user?.userPhoto ? (
          <img src={user?.userPhoto} />
        ) : (
          <img src={placeholder} />
        )}
      </div>
      <div className={styles.textField}>
        <div className={styles.names}>
          <h3>{displayName}</h3>
          <p>@{username}</p>
        </div>
        <div>{msg}</div>
      </div>
    </div>
  );
};
