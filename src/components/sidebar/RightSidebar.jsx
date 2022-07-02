import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import vishalpic from "assets/vishalpic.png";
import {
  ExternalLinkIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "assets/icons/icons";
import styles from "./sidebar.module.css";
import { getAllUsers } from "redux/slices/userSlice";
import { followUser, unFollowUser } from "redux/slices/authSlice";
import { CircularLoader } from "components";
import { darkThemeHandler, lightThemeHandler } from "redux/slices/themeSlice";

export const RightSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.theme);
  const { usersData, error, loading } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [allUsers, setAllUsers] = useState([]);

  return (
    <div className={styles.rightSidebarcontainer}>
      <div className={styles.rightHeaderContainer}>
        {theme === "dark" ? (
          <div
            className={styles.modeIcon}
            onClick={() => dispatch(lightThemeHandler())}
          >
            <SunIcon style={{ color: "orange" }} />
          </div>
        ) : (
          <div
            className={styles.modeIcon}
            onClick={() => dispatch(darkThemeHandler())}
          >
            <MoonIcon />
          </div>
        )}
      </div>
      <div className={`card-vertical ${styles.card}`}>
        <h3 className={styles.cardHeading}>Who to follow</h3>
        {loading === "loading" ? (
          <CircularLoader />
        ) : (
          usersData
            .filter((_) => _.username !== user?.username)
            .map((currentUser) => {
              return (
                <div key={currentUser._id}>
                  <div className={styles.userAccAccount}>
                    <div className={styles.userAccAccountWrapper}>
                      <div
                        onClick={() => {
                          navigate(`/profile/${currentUser.username}`);
                        }}
                      >
                        <img
                          src={currentUser.userPhoto}
                          className={styles.userAccPic}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.userAccDetails}>
                        <p className={styles.userAccName}>
                          {currentUser.firstName + " " + currentUser.lastName}
                        </p>
                        <p>@{currentUser.username}</p>
                      </div>
                    </div>
                    <div>
                      <div className={styles.followBtnWrapper}>
                        {user?.following?.length &&
                        user.following.some(
                          (followingUser) =>
                            followingUser?._id === currentUser?._id
                        ) ? (
                          <button
                            className={` btn btn-warning ${styles.btnFollow} ${styles.following} `}
                            onClick={() =>
                              dispatch(unFollowUser(currentUser._id))
                            }
                          >
                            Following
                          </button>
                        ) : (
                          <button
                            className={` btn btn-warning ${styles.btnFollow}`}
                            onClick={() =>
                              dispatch(followUser(currentUser._id))
                            }
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
        )}
      </div>
      <div className={styles.mylink}>
        <a href="https://twitter.com/vishalk01234" target="_blank">
          Connect with me <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
};
