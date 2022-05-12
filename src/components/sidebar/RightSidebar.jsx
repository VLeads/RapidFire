import React from "react";
import { User } from "components/user/User";
import vishalpic from "assets/vishalpic.png";
import { ExternalLinkIcon, MoonIcon, SearchIcon } from "assets/icons/icons";
import styles from "./sidebar.module.css";

export const RightSidebar = () => {
  return (
    <div className={styles.rightSidebarcontainer}>
      <div className={styles.rightHeaderContainer}>
        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
          <input type="search" maxlength="30" placeholder="Search RapidFire" />
        </div>
        <div className={styles.modeIcon}>
        <MoonIcon />
        </div>
          
      </div>
      <div className={`card-vertical ${styles.card}`}>
        <h3 className={styles.cardHeading}>Who to follow</h3>
        <User
          imgsrc={vishalpic}
          username={"Vishal Kumar"}
          userid={"Vishalk01234"}
        />
        <User
          imgsrc={vishalpic}
          username={"Vishal Kumar"}
          userid={"Vishalk01234"}
        />
        <User
          imgsrc={vishalpic}
          username={"Vishal Kumar"}
          userid={"Vishalk01234"}
        />
      </div>
      <div className={styles.mylink}>
        <a href="https://twitter.com/vishalk01234" target="_blank">
          Connect with me <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
};
