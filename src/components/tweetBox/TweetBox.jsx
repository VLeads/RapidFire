import { useState } from "react";
import styles from "./tweetBox.module.css";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import vishalPic from "assets/vishalpic.png";
import { EmojiIcon, GifIcon, ImageIcon } from "assets/icons/icons";

export const TweetBox = () => {
  const [charCount, setCharCount] = useState(210);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [newTweetBoxContent, setNewTweetBoxContent] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setNewTweetBoxContent((prevState) => prevState + emojiObject.emoji);
  };

  return (
    <div className={styles.tweetBoxContainer}>
      <form>
        <div className={styles.tweetBoxInput}>
          <div className={`avatar ${styles.avatarPic}`}>
            <img src={vishalPic} alt="vishal avatar" loading="lazy" />
          </div>
          <div className={styles.tweetBox}>
            <textarea
              className={styles.inputBox}
              type="text"
              placeholder="What's happening?"
              rows={5}
              value={newTweetBoxContent}
              onChange={(event) => {
                setCharCount(280 - event.target.value.length);
                setNewTweetBoxContent(event.target.value);
              }}
            />
            <div className={styles.btnContainer}>
              <div className={styles.icons}>
                <div>
                  <ImageIcon />
                </div>
                <div>
                  <GifIcon />
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
                {charCount < 0 ? (
                  <button
                    className={`btn btn-primary ${styles.tweetBtn}`}
                    disabled
                  >
                    Tweet
                  </button>
                ) : (
                  <button className={`btn btn-primary ${styles.tweetBtn}`}>
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
