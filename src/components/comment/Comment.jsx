import React from "react";
import styles from "./comment.module.css";
import placeholder from "assets/images/placeholder.png";

export const Comment = ({ avatar, displayName, username, msg }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.userPic}>
        {avatar ? <img src={avatar} /> : <img src={placeholder} />}
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
