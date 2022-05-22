import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import resultImg from "assets/images/result-bg.jpg";
import avatar from "assets/vishalpic.png";
import { EditProfileModal, Post } from "components";

export const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setSingleUser(user);
  }, [user]);
  console.log("profile", singleUser);
  return (
    <>
      {singleUser?.username && (
        <div className="profile__main">
          <div className="profile__header">
            <h3>Profile</h3>
          </div>
          <div className="profile__header__body">
            <div className="profile__header__body-images">
              <div className="background-img">
                <img
                  src={singleUser?.coverPhoto}
                  alt="background"
                  loading="lazy"
                />
              </div>
              <div className="avatar-img">
                <img src={singleUser?.userPhoto} alt="avatar" loading="lazy" />
              </div>
            </div>
            <div className="profile-edit">
              <button
                className="btn btn-edit-profile"
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit Profile
              </button>
            </div>
            <div className="profile__header__body-user">
              <h3 className="profile-name">
                {singleUser?.firstName} {singleUser?.lastName}
              </h3>
              <p className="profile-username">@{singleUser?.username}</p>
            </div>

            <div className="profile__header__body-description">
              <p>{singleUser.bio}</p>
              <a
                href={singleUser?.link}
                target="_blank"
                style={{ color: "blue" }}
              >
                {singleUser?.link}
              </a>
            </div>
            <div className="profile__header__body-footer">
              <p className="follow-count">
                {singleUser?.following?.length} Following
              </p>
              <p className="follow-count">
                {singleUser?.followers?.length} Followers
              </p>
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
          <EditProfileModal
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </div>
      )}
    </>
  );
};
