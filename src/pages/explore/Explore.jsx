import React from "react";
import "./explore.css";
import { Post } from "components";
import avatar from "assets/vishalpic.png";

export const Explore = () => {
  return (
    <div className="explore__main">
      <div className="explore__header">
        <h3>Explore</h3>
      </div>
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
      </div>
    </div>
  );
};
