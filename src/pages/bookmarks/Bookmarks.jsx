import React, { useEffect, useState } from "react";
import "./bookmarks.css";
import avatar from "assets/vishalpic.png";
import { Post, TweetLoader } from "components";
import { OptionHorizontalIcon } from "assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookmarkPost } from "redux/slices/bookmarkSlice";

export const Bookmarks = () => {
  const [isBookmarkAllOptionOpen, setIsBookmarkAllOptionOpen] = useState(false);
  const dispatch = useDispatch();

  const { bookmarks, loading } = useSelector((state) => state.bookmark);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(getAllBookmarkPost());
    }
  }, []);

  return (
    <div className="bookmarks__main">
      <div className="bookmarks__header">
        <h3>Bookmarks</h3>
        <div className="bookmarks__header-option-parent">
          <div
            className="bookmarks__header-option"
            onClick={() => setIsBookmarkAllOptionOpen((prev) => !prev)}
          >
            <OptionHorizontalIcon />
          </div>
          {isBookmarkAllOptionOpen && (
            <div className="clearAllBookmarks">
              <button className="btn btn-danger">Clear All Bookmarks</button>
            </div>
          )}
        </div>
      </div>
      <div>
        {loading === "loading" ? (
          <>
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
          </>
        ) : bookmarks?.length === 0 ? (
          <div>Empty</div>
        ) : (
          bookmarks?.map((ele) => (
            <Post
              key={ele._id}
              postId={ele._id}
              displayName={ele.firstName + " " + ele.lastName}
              username={ele?.username}
              text={ele?.content}
              avatar={ele?.userPhoto}
              likes={ele?.likes}
              postComments={ele?.comments}
            />
          ))
        )}
      </div>
    </div>
  );
};
