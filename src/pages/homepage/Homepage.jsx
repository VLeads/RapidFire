import React from "react";
import "./homepage.css";
import { Post, TweetBox } from "components";
import avatar from "assets/vishalpic.png";

export const Homepage = () => {
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
