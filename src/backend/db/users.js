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
    followers: "520",
    following: "741",
    bookmarks: [],
    bio: "From Neog",
    userPhoto:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vishal",
    lastName: "Kumar",
    username: "vishalk01234",
    password: "12345678",
    followers: "52M",
    following: "28",
    bookmarks: [],
    userPhoto:
      "https://pbs.twimg.com/profile_images/1497645446579113986/BnL32tQn_400x400.jpg",
    bio: "Aspiring Full Stack developer 👨‍💻 | learning and sharing | neogcamp | sometimes Shayar ✍️",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "VisElonhal",
    lastName: "Musk",
    username: "elonmusk",
    password: "12345678",
    followers: "94.2M",
    following: "111",
    bookmarks: [],
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    bio: "Revolutionizing the world |Owns Tesla, SpaceX, Hyperloop, Starlink etc.",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
