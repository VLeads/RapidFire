import React, { useState } from "react";
import "./bookmarks.css";
import avatar from "assets/vishalpic.png";
import { Post } from "components";
import { OptionHorizontalIcon } from "assets/icons/icons";

export const Bookmarks = () => {
  const [isBookmarkAllOptionOpen, setIsBookmarkAllOptionOpen] = useState(false);

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
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
          bookmark={true}
        />
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
          bookmark={true}
        />
        <Post
          displayName={"Vishal Kumar"}
          username={"Vishalk01234"}
          text={"Hey guys, this is first tweet !"}
          avatar={avatar}
          bookmark={true}
        />
      </div>
    </div>
  );
};
