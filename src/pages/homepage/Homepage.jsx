import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homepage.css";
import { Post, TweetBox, TweetLoader } from "components";
import avatar from "assets/vishalpic.png";
import { getAllPosts } from "redux/slices/postSlice";
import { OptionHorizontalIcon, StarsIcon } from "assets/icons/icons";

export const Homepage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [isSortOptionOpen, setIsSortOptionOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(getAllPosts());
    }
  }, [posts]);

  return (
    <div className="homepage__main">
      <div className="homepage__header flex">
        <h3>Homepage</h3>
        <div className="homepage__header-option-parent">
          <div
            className="homepage__header-option "
            onClick={() => setIsSortOptionOpen((prev) => !prev)}
          >
            <StarsIcon />
          </div>
          {isSortOptionOpen && (
            <div className="optionExpand">
              <li
                name="trending"
                className="customList"
                onClick={(e) => {
                  setFilter("latest");
                  setIsSortOptionOpen(false);
                }}
              >
                <button className="customListBtn">See Latest Posts</button>
              </li>
              <li
                name="trending"
                className="customList"
                onClick={(e) => {
                  setFilter("trending");
                  setIsSortOptionOpen(false);
                }}
              >
                <button className="customListBtn">See Trending Posts</button>
              </li>
            </div>
          )}
        </div>
      </div>
      <TweetBox
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
      />
      <div
        onClick={() => {
          setShowEmojiPicker(false);
          setIsSortOptionOpen(false);
        }}
      >
        {loading === "loading" ? (
          <>
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
          </>
        ) : filter === "trending" && posts?.length !== 0 ? (
          posts
            ?.filter((ele) => parseInt(ele.likes.likeCount) >= 1000)
            ?.map((ele) => (
              <Post
                key={ele._id}
                postId={ele._id}
                displayName={ele?.firstName + " " + ele?.lastName}
                username={ele?.username}
                text={ele?.content}
                avatar={ele?.userPhoto}
                likes={ele?.likes}
                postComments={ele?.comments}
                userId={ele._id}
              />
            ))
        ) : (
          posts?.map((ele) => (
            <Post
              key={ele._id}
              postId={ele._id}
              displayName={ele?.firstName + " " + ele?.lastName}
              username={ele?.username}
              text={ele?.content}
              avatar={ele?.userPhoto}
              likes={ele?.likes}
              postComments={ele?.comments}
              userId={ele._id}
            />
          ))
        )}
      </div>
    </div>
  );
};
