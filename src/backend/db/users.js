import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://github.com/VLeads/",
    bio: "From Neog",
    coverPhoto:
      "https://timelinecovers.pro/facebook-cover/download/programming-think-twice-code-once-facebook-cover.jpg",
    userPhoto:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vishal",
    lastName: "Kumar",
    username: "Vishalk01234",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://github.com/VLeads/",
    coverPhoto:
      "https://raw.githubusercontent.com/VLeads/RapidFire/dev/src/assets/images/result-bg.jpg",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1497645446579113986/BnL32tQn_400x400.jpg",
    bio: "Aspiring Full Stack developer 👨‍💻 | learning and sharing | neogcamp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://github.com/VLeads/",
    coverPhoto:
      "https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    bio: "Revolutionizing the world |Owns Tesla, SpaceX, Hyperloop, Starlink etc.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sundar",
    lastName: "Pichai",
    username: "sundarpichai",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://github.com/VLeads/",
    coverPhoto:
      "https://raw.githubusercontent.com/VLeads/RapidFire/dev/src/assets/images/result-bg.jpg",
    userPhoto:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    bio: "CEO,  Google and Alphabet",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
