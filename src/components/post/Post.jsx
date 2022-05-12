import React, { useState } from "react";
import {
  OutlineBookmarkIcon,
  ChatOutlineIcon,
  HeartOutlineIcon,
  FilledBookmarkIcon,
  EmojiIcon,
  UserIcon,
} from "assets/icons/icons";
import styles from "./post.module.css";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { Comment } from "components";
import placeholder from "assets/images/placeholder.png";

export const Post = ({ displayName, username, text, avatar, bookmark }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentBoxContent, setCommentBoxContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setCommentBoxContent((prevState) => prevState + emojiObject.emoji);
  };

  return (
    <div className={styles.postContainer}>
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
            <div className={styles.postReact}>
              <HeartOutlineIcon />
              <p className={styles.postReactCount}>200</p>
            </div>
            <div
              className={styles.postReact}
              onClick={() => setIsCommentOpen((prev) => !prev)}
            >
              <ChatOutlineIcon />
              <p className={styles.postReactCount}>12</p>
            </div>
            <div>
              {bookmark ? <FilledBookmarkIcon /> : <OutlineBookmarkIcon />}
            </div>
          </div>
        </div>
      </div>
      {isCommentOpen && (
        <div className={styles.commentContainer}>
          <div className={styles.commentInput}>
            <div className={styles.user}>
              <UserIcon />
            </div>
            <input
              className={styles.commentBox}
              maxLength={70}
              placeholder="write a comment..."
              value={commentBoxContent}
              onChange={(event) => {
                setCommentBoxContent(event.target.value);
              }}
            />
            <div className={styles.emojiPickerContainer}>
              <EmojiIcon onClick={() => setShowEmojiPicker((prev) => !prev)} />

              {showEmojiPicker && (
                <div className={styles.emojiPicker}>
                  <Picker
                    onEmojiClick={onEmojiClick}
                    skinTone={SKIN_TONE_NEUTRAL}
                  />
                </div>
              )}
            </div>
            <button className={`btn btn-info ${styles.replyBtn}`}>Reply</button>
          </div>
          <div className={styles.comments}>
            <Comment
              avatar={placeholder}
              displayName={"user"}
              username={"user1233"}
              msg={"Hey Vishal !"}
            />
            <Comment
              avatar={placeholder}
              displayName={"Elon Musk"}
              username={"elon1233"}
              msg={" Vishal you are amazing !"}
            />
          </div>
        </div>
      )}
    </div>
  );
};
