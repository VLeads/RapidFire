import React from "react";
import "./profile.css";
import resultImg from "assets/images/result-bg.jpg";
import avatar from "assets/vishalpic.png";
import { Post } from "components";

export const Profile = () => {
  return (
    <div className="profile__main">
      <div className="profile__header">
        <h3>Profile</h3>
      </div>
      <div className="profile__header__body">
        <div className="profile__header__body-images">
          <div className="background-img">
            <img src={resultImg} alt="background" loading="lazy" />
          </div>
          <div className="avatar-img">
            <img src={avatar} alt="avatar" loading="lazy" />
          </div>
        </div>
        <div className="profile-edit">
          <button className="btn btn-edit-profile">Edit Profile</button>
        </div>
        <div className="profile__header__body-user">
          <h3 className="profile-name">Vishal Kumar</h3>
          <p className="profile-username">@Vishalk01234</p>
        </div>

        <div className="profile__header__body-description">
          <p>
            Aspiring Full Stack developer 👨‍💻 | learning and sharing | neogcamp |
            sometimes Shayar ✍️
          </p>
        </div>
        <div className="profile__header__body-footer">
          <p className="follow-count">10 Following</p>
          <p className="follow-count">22M Followers</p>
        </div>
      </div>

      <div className="profile__content">
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
