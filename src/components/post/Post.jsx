import {
  OutlineBookmarkIcon,
  ChatOutlineIcon,
  HeartOutlineIcon,
  FilledBookmarkIcon,
} from "assets/icons/icons";
import React from "react";
import styles from "./post.module.css";

export const Post = ({ displayName, username, text, avatar, bookmark }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postAvatar}>
        <img
          src={avatar}
          alt="avatar"
          className={styles.avatarImg}
          loading="lazy"
        />
      </div>
      <div className={styles.postBody}>
        <div className={styles.postHeader}>
          <div className={styles.postHeaderText}>
            <h3>{displayName}</h3>
            <p>@{username}</p>
          </div>
          <div className={styles.postHeaderDescription}>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.postFooter}>
          <ChatOutlineIcon />
          <HeartOutlineIcon />
          {bookmark ? <FilledBookmarkIcon /> : <OutlineBookmarkIcon />}
        </div>
      </div>
    </div>
  );
};
