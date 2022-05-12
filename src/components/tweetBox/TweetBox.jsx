import { useState } from "react";
import styles from "./tweetBox.module.css";
import vishalPic from "assets/vishalpic.png";
import { EmojiIcon, ImageIcon } from "assets/icons/icons";

export const TweetBox = () => {
  const [charCount, setCharCount] = useState(210);

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
            />
            <div className={styles.btnContainer}>
              <div className={styles.icons}>
                <ImageIcon />
                <EmojiIcon />
              </div>
              <div>
                <button className={`btn btn-primary ${styles.tweetBtn}`}>
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
