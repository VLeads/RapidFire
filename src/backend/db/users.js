import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import devbg from "assets/images/dev-bg.jpg";
import sundarImg from "assets/images/Sundar_pichai.png";
import satyaImg from "assets/images/satya.jpeg";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Satya",
    lastName: "Nadella",
    username: "satyanadella",
    password: "12345678",
    followers: [],
    following: [],
    bookmarks: [],
    link: "https://news.microsoft.com/exec/satya-nadella/",
    bio: "Chairman and CEO of Microsoft Corporation",
    coverPhoto:
      "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPhoto: satyaImg,
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
    userPhoto: devbg,
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
    link: "https://www.spacex.com/",
    coverPhoto:
      "https://raw.githubusercontent.com/VLeads/RapidFire/dev/src/assets/images/result-bg.jpg",
    userPhoto:
      "https://img.freepik.com/premium-vector/portrait-elon-musk-vector-illustration-flat_953432-1482.jpg?w=740",
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
    userPhoto: sundarImg,
    bio: "CEO,  Google and Alphabet",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
