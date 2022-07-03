import { useState } from "react";
import styles from "./tweetBox.module.css";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import placeholder from "assets/images/placeholder.png";
import { CancelIcon, EmojiIcon, GifIcon, ImageIcon } from "assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "redux/slices/postSlice";

export const TweetBox = ({ showEmojiPicker, setShowEmojiPicker }) => {
  const [charCount, setCharCount] = useState(210);

  const { user } = useSelector((state) => state.auth);

  const [newTweetBoxContent, setNewTweetBoxContent] = useState({
    textContent: "",
    pic: "",
  });

  const dispatch = useDispatch();

  const onEmojiClick = (event, emojiObject) => {
    setNewTweetBoxContent({
      ...newTweetBoxContent,
      textContent: newTweetBoxContent?.textContent + emojiObject?.emoji,
    });
  };

  const tweetSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createPost({
        firstName: user.firstName,
        lastName: user.lastName,
        userPhoto: user.userPhoto,
        content: newTweetBoxContent.textContent,
        postPic: newTweetBoxContent.pic,
      })
    );
    setNewTweetBoxContent({ textContent: "", pic: "" });
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setNewTweetBoxContent({ ...newTweetBoxContent, pic: base64File });
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
              value={newTweetBoxContent.textContent}
              onChange={(event) => {
                setCharCount(210 - event.target.value.length);
                setNewTweetBoxContent({
                  ...newTweetBoxContent,
                  textContent: event.target.value,
                });
              }}
              required
            />
            {newTweetBoxContent.pic ? (
              <div className={styles.imgUploaded}>
                <img src={newTweetBoxContent.pic} alt="" />
                <CancelIcon
                  className={` ${styles.uploadImgCancel}`}
                  onClick={() =>
                    setNewTweetBoxContent({ ...newTweetBoxContent, pic: "" })
                  }
                />
              </div>
            ) : null}
            <div className={styles.btnContainer}>
              <div className={styles.icons}>
                <div className={styles.imgIconPicker}>
                  <ImageIcon />

                  <input
                    type="file"
                    accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                    onChange={(e) => {
                      onFileChange(e);
                      setShowEmojiPicker(false);
                    }}
                    className={styles.imgIconInput}
                  />
                </div>
                <div className={styles.imgIconPicker}>
                  <GifIcon />
                  <input
                    type="file"
                    accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                    onChange={(e) => {
                      onFileChange(e);
                      setShowEmojiPicker(false);
                    }}
                    className={styles.imgIconInput}
                  />
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
