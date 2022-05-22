import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homepage.css";
import { Post, TweetBox } from "components";
import avatar from "assets/vishalpic.png";

export const Homepage = () => {
  const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="homepage__main">
      <div className="homepage__header">
        <h3>Homepage</h3>
      </div>
      <TweetBox />
      <div>
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
        />
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
        />
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
        />
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
        />
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
        />
      </div>
    </div>
  );
};
