import React, { useEffect, useState } from "react";
import {
  OutlineBookmarkIcon,
  ChatOutlineIcon,
  HeartOutlineIcon,
  FilledBookmarkIcon,
  EmojiIcon,
  UserIcon,
  HeartFillIcon,
  OptionsVerticalIcon,
  DeleteIcon,
  EditIcon,
} from "assets/icons/icons";
import styles from "./post.module.css";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { CircularLoader, Comment, EditPostModal } from "components";

import { useDispatch, useSelector } from "react-redux";
import {
  addCommentByPostId,
  deletePost,
  dislikePost,
  getPost,
  likePost,
} from "redux/slices/postSlice";

import {
  addToBookmarkPost,
  removeFromBookmarkPost,
} from "redux/slices/bookmarkSlice";
import { Link, useNavigate } from "react-router-dom";

export const Post = ({
  displayName,
  username,
  text,
  avatar,
  bookmark,
  likes,
  postId,
  postComments,
  userId,
}) => {
  const navigate = useNavigate();

  const [isCommentOpen, setIsCommentOpen] = useState(false);
  // const [commentBoxContent, setCommentBoxContent] = useState("");
  const [commentBoxContent, setCommentBoxContent] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [isListExpand, setIsListExpand] = useState(false);
  const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { posts, currentPost, loading, postActionLoading } = useSelector(
    (state) => state.post
  );
  const { user } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.bookmark);

  const onEmojiClick = (event, emojiObject) => {
    setCommentBoxContent((prevState) => prevState + emojiObject.emoji);
  };

  useEffect(() => {
    if (loading === "idle") {
      dispatch(getCommentsByPostId(postId));
    }
  }, []);

  const likeHandler = (e) => {
    dispatch(likePost(postId));
  };
  const dislikeHandler = (e) => {
    dispatch(dislikePost(postId));
  };

  const deletePostHandler = (e) => {
    dispatch(deletePost(postId));
  };

  const addBookmarkHandler = () => {
    dispatch(addToBookmarkPost(postId));
  };

  const removeBookmarkHandler = () => {
    dispatch(removeFromBookmarkPost(postId));
  };

  const commentOptionHandler = (e) => {
    setIsCommentOpen((prev) => !prev);

    dispatch(getPost(postId));
  };

  const addCommentHandler = (e) => {
    e.preventDefault();
    console.log("payload", commentBoxContent);
    dispatch(
      addCommentByPostId({
        comment: {
          commentBoxContent,
          username: user.username,
          avatar: user.userPhoto,
        },
        id: postId,
      })
    );
    setCommentBoxContent("");
    setShowEmojiPicker(false);
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.post}>
        <div
          className={styles.postAvatar}
          onClick={() => {
            navigate(`/profile/${username}`);
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            className={styles.avatarImg}
            loading="lazy"
          />
        </div>
        <div className={styles.postBody}>
          <div className={styles.postHeader}>
            <div className={styles.postHeaderWrapper}>
              <div className={styles.postHeaderText}>
                <h3>{displayName}</h3>
                <p>@{username}</p>
              </div>

              {user.username === username && (
                <div className={styles.verticalOptionIconContainer}>
                  <div
                    className={styles.verticalOptionIconWrapper}
                    onClick={() => setIsListExpand((prev) => !prev)}
                  >
                    <OptionsVerticalIcon />
                  </div>
                  {isListExpand && (
                    <div className={styles.optionExpand}>
                      <li className={styles.customList}>
                        <button
                          className={styles.customListBtn}
                          onClick={() => setIsEditPostModalOpen(true)}
                        >
                          <EditIcon /> Edit Post
                        </button>
                      </li>
                      <li
                        className={styles.customList}
                        onClick={(e) => deletePostHandler()}
                      >
                        <button className={styles.customListBtn}>
                          <DeleteIcon /> Delete
                        </button>
                      </li>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              className={styles.postHeaderDescription}
              onClick={() => setIsListExpand(false)}
            >
              <p>{text}</p>
            </div>
          </div>
          <div className={styles.postFooter}>
            <div className={styles.postReact}>
              <span>
                {likes?.likedBy.length !== 0 &&
                likes?.likedBy.some(
                  (item) => item.username === user.username
                ) ? (
                  <HeartFillIcon onClick={dislikeHandler} />
                ) : (
                  <HeartOutlineIcon onClick={likeHandler} />
                )}
              </span>
              <p className={styles.postReactCount}>{likes?.likeCount}</p>
            </div>
            <div
              className={styles.postReact}
              onClick={(e) => commentOptionHandler(e)}
            >
              <ChatOutlineIcon />
              <p className={styles.postReactCount}>{postComments?.length}</p>
            </div>
            <div>
              {bookmarks?.length !== 0 &&
              bookmarks.some((bookmark) => bookmark._id === postId) ? (
                <FilledBookmarkIcon
                  style={{ color: "#2e8be6" }}
                  onClick={removeBookmarkHandler}
                />
              ) : (
                <OutlineBookmarkIcon onClick={addBookmarkHandler} />
              )}
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
                setShowEmojiPicker(false);
              }}
              autoFocus
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
            {commentBoxContent?.reply?.length !== 0 ? (
              <button
                className={`btn btn-info ${styles.replyBtn}`}
                onClick={(e) => addCommentHandler(e)}
              >
                Reply
              </button>
            ) : (
              <button
                className={`btn btn-info btn-info-outline ${styles.replyBtn}`}
                disabled
              >
                Reply
              </button>
            )}
          </div>

          <div className={styles.comments}>
            {postActionLoading === "loading" ? (
              <CircularLoader />
            ) : (
              currentPost?.comments?.map((item) => (
                <Comment
                  key={item?._id}
                  avatar={item?.userPhoto}
                  displayName={`${item?.firstName} ${item?.lastName}`}
                  username={item?.username}
                  msg={item?.commentBoxContent}
                />
              ))
            )}
          </div>
        </div>
      )}
      <EditPostModal
        isEditPostModalOpen={isEditPostModalOpen}
        setIsEditPostModalOpen={setIsEditPostModalOpen}
        setIsListExpand={setIsListExpand}
        postId={postId}
        text={text}
        avatar={avatar}
      />
    </div>
  );
};
