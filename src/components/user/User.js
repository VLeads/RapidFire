import React from "react";
import styles from "./user.module.css";

export const User = ({ imgsrc, username, userid, showFollow }) => {
  return (
    <div className={styles.userAccount}>
      <div>
        <img src={imgsrc} className={styles.userPic} loading="lazy" />
      </div>
      <div className={styles.userDetails}>
        <p className={styles.userName}>{username}</p>
        <p>@{userid}</p>
      </div>
      {showFollow === true ? (
        <div>
          <button
            className={` btn btn-warning ${styles.btnFollow} ${styles.hi}`}
          >
            Follow
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
