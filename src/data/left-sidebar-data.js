import { v4 as uuid } from "uuid";
import logo from "assets/logo/logo.png";
import {
  ROUTE_BOOKMARKS,
  ROUTE_EXPLORE,
  ROUTE_HOME,
  ROUTE_PROFILE,
} from "utils";
import {
  FilledBookmarkIcon,
  FilledHashtagIcon,
  FilledHomeIcon,
  FilledProfileIcon,
  OutlineBookmarkIcon,
  OutlinedHomeIcon,
  OutlineHashtagIcon,
  OutlineProfileIcon,
} from "assets/icons/icons";

export const LeftSidebarData = {
  logoImg: {
    src: logo,
    altText: "Rapid Fire logo",
  },

  links: [
    {
      _id: uuid(),
      link: {
        outlinedIcon: (props) => <OutlinedHomeIcon {...props} />,
        filledIcon: (props) => <FilledHomeIcon {...props} />,
        url: ROUTE_HOME,
        text: "Home",
      },
    },
    {
      _id: uuid(),
      link: {
        outlinedIcon: (props) => <OutlineHashtagIcon {...props} />,
        filledIcon: (props) => <FilledHashtagIcon {...props} />,
        url: ROUTE_EXPLORE,
        text: "Explore",
      },
    },
    {
      _id: uuid(),
      link: {
        outlinedIcon: (props) => <OutlineBookmarkIcon {...props} />,
        filledIcon: (props) => <FilledBookmarkIcon {...props} />,
        url: ROUTE_BOOKMARKS,
        text: "Bookmarks",
      },
    },
    {
      _id: uuid(),
      link: {
        outlinedIcon: (props) => <OutlineProfileIcon {...props} />,
        filledIcon: (props) => <FilledProfileIcon {...props} />,

        url: ROUTE_PROFILE,
        text: "Profile",
      },
    },
  ],
};
