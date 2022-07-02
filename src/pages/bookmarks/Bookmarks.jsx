import React, { useEffect } from "react";
import "./bookmarks.css";
import avatar from "assets/vishalpic.png";
import { Post, TweetLoader } from "components";
import { OptionHorizontalIcon } from "assets/icons/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookmarkPost } from "redux/slices/bookmarkSlice";

export const Bookmarks = () => {
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
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            Nothing to show...
          </div>
        ) : (
          bookmarks?.map((ele) => (
            <Post
              key={ele._id}
              postId={ele._id}
              displayName={ele?.firstName + " " + ele.lastName}
              username={ele?.username}
              text={ele?.content}
              postPic={ele?.postPic}
              avatar={ele?.userPhoto}
              likes={ele?.likes}
              postComments={ele?.comments}
              userId={ele?._id}
            />
          ))
        )}
      </div>
    </div>
  );
};
