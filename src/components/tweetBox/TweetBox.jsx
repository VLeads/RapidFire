import { useState } from "react";
import styles from "./tweetBox.module.css";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import placeholder from "assets/images/placeholder.png";
import { EmojiIcon, GifIcon, ImageIcon } from "assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "redux/slices/postSlice";

export const TweetBox = ({ showEmojiPicker, setShowEmojiPicker }) => {
  const [charCount, setCharCount] = useState(210);

  const { user } = useSelector((state) => state.auth);

  const [newTweetBoxContent, setNewTweetBoxContent] = useState("");

  const dispatch = useDispatch();

  const onEmojiClick = (event, emojiObject) => {
    setNewTweetBoxContent((prevState) => prevState + emojiObject.emoji);
  };

  const tweetSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPost({
        firstName: user.firstName,
        lastName: user.lastName,
        userPhoto: user.userPhoto,
        content: newTweetBoxContent,
      })
    );
    setNewTweetBoxContent("");
  };

  return (
    <div className={styles.tweetBoxContainer}>
      <form
        onSubmit={(e) => {
          tweetSubmitHandler(e);
          setShowEmojiPicker(false);
        }}
      >
        <div className={styles.tweetBoxInput}>
          <div className={`avatar ${styles.avatarPic}`}>
            {user?.userPhoto ? (
              <img src={user?.userPhoto} alt="avatar" loading="lazy" />
            ) : (
              <img src={placeholder} alt="avatar" loading="lazy" />
            )}
          </div>
          <div className={styles.tweetBox}>
            <textarea
              className={styles.inputBox}
              type="text"
              placeholder="What's happening?"
              rows={5}
              value={newTweetBoxContent}
              onChange={(event) => {
                setCharCount(210 - event.target.value.length);
                setNewTweetBoxContent(event.target.value);
              }}
              required
            />
            <div className={styles.btnContainer}>
              <div className={styles.icons}>
                <div>
                  <ImageIcon onClick={() => setShowEmojiPicker(false)} />
                </div>
                <div>
                  <GifIcon onClick={() => setShowEmojiPicker(false)} />
                </div>
                <div className={styles.emojiPickerContainer}>
                  <EmojiIcon
                    onClick={() => setShowEmojiPicker((prev) => !prev)}
                  />

                  {showEmojiPicker && (
                    <div className={styles.emojiPicker}>
                      <Picker
                        onEmojiClick={onEmojiClick}
                        skinTone={SKIN_TONE_NEUTRAL}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.createTweetRightSide}>
                {charCount < 0 ? (
                  <p
                    className={`${styles.rejectCharCount} ${styles.charCountCircle}`}
                  >
                    {charCount}
                  </p>
                ) : (
                  <p
                    className={`${styles.acceptCharCount} ${styles.charCountCircle}`}
                  >
                    {charCount}
                  </p>
                )}
                {charCount < 0 || charCount === 210 ? (
                  <button
                    className={`btn btn-primary ${styles.tweetBtn}`}
                    disabled
                  >
                    Tweet
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.tweetBtn}`}
                  >
                    Tweet
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
