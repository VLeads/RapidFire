import React from "react";
import styles from "./user.module.css";

export const User = ({ imgsrc, username, userid }) => {
  return (
    <div className={styles.userAccount}>
      <div>
        <img src={imgsrc} className={styles.userPic} />
      </div>
      <div className={styles.userDetails}>
        <p className={styles.userName}>{username}</p>
        <p>@{userid}</p>
      </div>
      <div>
        <button className={` btn btn-warning ${styles.btnFollow} ${styles.hi}`}>
          Follow
        </button>
      </div>
    </div>
  );
};
