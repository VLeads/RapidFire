import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./explore.css";
import { Post, TweetLoader } from "components";
import avatar from "assets/vishalpic.png";
import { getAllPosts } from "redux/slices/postSlice";

export const Explore = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(getAllPosts());
    }
  }, [posts]);

  return (
    <div className="explore__main">
      <div className="explore__header">
        <h3>Explore</h3>
      </div>
      <div>
        {loading === "loading" ? (
          <>
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
            <TweetLoader />
          </>
        ) : (
          posts?.map((ele) => (
            <Post
              key={ele._id}
              postId={ele._id}
              displayName={ele?.firstName + " " + ele?.lastName}
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
