import React, { useState } from "react";
import { LeftSidebarData } from "data/left-sidebar-data";
import { Link, useLocation } from "react-router-dom";
import styles from "./sidebar.module.css";
import vishalpic from "assets/vishalpic.png";
import { CheckIcon, OptionHorizontalIcon } from "assets/icons/icons";

export const LeftSidebar = () => {
  const location = useLocation();

  const [isUserAccountOpen, setIsUserAccountOpen] = useState(false);

  const { logoImg, links } = LeftSidebarData;

  return (
    <aside className={styles.nav_parent}>
      <nav className={styles.nav}>
        <div>
          <img
            className={styles.logo}
            src={logoImg.src}
            alt={logoImg.altText}
          />
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

            {/* <button className={`btn btn-primary ${styles.btnTweet}`}>
              Broadcast
            </button> */}
          </div>
          <div className={styles.userAccountParent}>
            <div
              className={styles.userAccount}
              onClick={() => setIsUserAccountOpen((prev) => !prev)}
            >
              <div>
                <img
                  src={vishalpic}
                  className={styles.userPic}
                  loading="lazy"
                />
              </div>
              <div className={styles.userDetails}>
                <p className={styles.userName}>Vishal Kumar</p>
                <p>@Vishalk01234</p>
              </div>

              <div className={styles.options}>
                <OptionHorizontalIcon />
              </div>
            </div>
            {isUserAccountOpen && (
              <div className={styles.userAccountModal}>
                <div className={styles.userAccountModalOption}>
                  <div>
                    <img
                      src={vishalpic}
                      className={styles.userPic}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.userDetails}>
                    <p className={styles.userName}>Vishal Kumar</p>
                    <p>@Vishalk01234</p>
                  </div>

                  <div className={styles.checkIcon}>
                    <CheckIcon />
                  </div>
                </div>
                <button className={`btn ${styles.logoutBtn}`}>
                  Logout @Vishalk01234
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};
