import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LeftSidebarData } from "data/left-sidebar-data";
import styles from "./sidebar.module.css";
import vishalpic from "assets/vishalpic.png";
import { CheckIcon, OptionHorizontalIcon } from "assets/icons/icons";
import { logoutHandler } from "redux/slices/authSlice";
import { ROUTE_LANDING } from "utils";
import placeholder from "assets/images/placeholder.png";

export const LeftSidebar = () => {
  const [isUserAccountOpen, setIsUserAccountOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { logoImg, links } = LeftSidebarData;

  return (
    <aside className={styles.nav_parent}>
      <nav className={styles.nav}>
        <div>
          <Link to="/home">
            <img
              className={styles.logo}
              src={logoImg.src}
              alt={logoImg.altText}
            />
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <div>
            <ul>
              {links.map(({ _id, link }) => {
                const isLinkActive = location.pathname === link.url;
                return (
                  <Link to={link.url} key={_id}>
                    <li className={styles.navList}>
                      <span>
                        {isLinkActive ? (
                          <link.filledIcon className={styles.navIcon} />
                        ) : (
                          <link.outlinedIcon className={styles.navIcon} />
                        )}
                      </span>
                      <span
                        className={`${styles.navText} ${
                          isLinkActive ? styles.navText_active : ""
                        }`}
                      >
                        {link.text}
                      </span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className={styles.userAccountParent}>
            <div
              className={styles.userAccount}
              onClick={() => setIsUserAccountOpen((prev) => !prev)}
            >
              <div>
                {user?.userPhoto ? (
                  <img
                    src={user?.userPhoto}
                    className={styles.userPic}
                    loading="lazy"
                  />
                ) : (
                  <img src={placeholder} className={styles.userPic} />
                )}
              </div>
              <div className={styles.userDetails}>
                <p
                  className={styles.userName}
                >{`${user?.firstName} ${user?.lastName}`}</p>
                <p>@{user?.username ? user?.username : user?.firstName}</p>
              </div>

              <div className={styles.options}>
                <OptionHorizontalIcon />
              </div>
            </div>
            {isUserAccountOpen && (
              <div className={styles.userAccountModal}>
                <div className={styles.userAccountModalOption}>
                  {user?.userPhoto ? (
                    <img
                      src={user?.userPhoto}
                      className={styles.userPic}
                      loading="lazy"
                    />
                  ) : (
                    <img src={placeholder} className={styles.userPic} />
                  )}

                  <div className={styles.userDetails}>
                    <p
                      className={styles.userName}
                    >{`${user?.firstName} ${user?.lastName}`}</p>
                    <p>@{user?.username ? user?.username : user?.firstName}</p>
                  </div>

                  <div className={styles.checkIcon}>
                    <CheckIcon />
                  </div>
                </div>
                <button
                  className={`btn ${styles.logoutBtn}`}
                  onClick={() => {
                    dispatch(logoutHandler());
                    toast.success("Logged out successfully");
                  }}
                >
                  Logout @{user?.username ? user?.username : user?.firstName}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};
