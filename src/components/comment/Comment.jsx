import React from "react";
import styles from "./comment.module.css";

export const Comment = ({ avatar, displayName, username, msg }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.userPic}>
        <img src={avatar} />
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
