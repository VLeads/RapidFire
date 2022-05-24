import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import resultImg from "assets/images/result-bg.jpg";
import avatar from "assets/vishalpic.png";
import { CircularLoader, EditProfileModal, Post } from "components";
import { useParams } from "react-router-dom";
import { getUser } from "redux/slices/userSlice";
import { followUser, unFollowUser } from "redux/slices/authSlice";

export const Profile = () => {
  const { username } = useParams();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [singleUser, setSingleUser] = useState(user);
  const { usersData } = useSelector((state) => state.user);
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    const currentUser = usersData.find((item) => item.username === username);

    if (currentUser) {
      setSingleUser(currentUser);
    } else {
      setSingleUser(user);
    }
  }, [usersData, user, singleUser, username]);

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
              {singleUser.username === user.username ? (
                <button
                  className="btn btn-edit-profile"
                  onClick={() => setIsEditModalOpen(true)}
                >
                  Edit Profile
                </button>
              ) : user?.following?.length &&
                user.following.some(
                  (followingUser) =>
                    followingUser?.username === singleUser?.username
                ) ? (
                <button
                  className={` btn btn-warning btnFollow following `}
                  onClick={() => dispatch(unFollowUser(singleUser?._id))}
                >
                  Following
                </button>
              ) : (
                <button
                  className={` btn btn-warning btnFollow`}
                  onClick={() => dispatch(followUser(singleUser?._id))}
                >
                  Follow
                </button>
              )}
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
            {loading === "loading" ? (
              <CircularLoader />
            ) : (
              posts
                ?.filter((post) => post.username === singleUser.username)
                .map((ele) => (
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
          <EditProfileModal
            isEditModalOpen={isEditModalOpen}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </div>
      )}
    </>
  );
};
