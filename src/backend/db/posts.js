import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Vishal posts some amazing content related to tech and programming. You muct visit his profile and follow him!",
    likes: {
      likeCount: 700,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Satya",
    lastName: "Nadella",
    username: "satyanadella",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Listen, I can't do miracles ok",
    likes: {
      likeCount: 800,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Inhale the future, Exhale the past.",
    likes: {
      likeCount: 2700,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Vishal ",
    lastName: "Kumar",
    username: "Vishalk01234",
    userPhoto:
      "https://pbs.twimg.com/profile_images/1497645446579113986/BnL32tQn_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At Google I/O today we shared how we're advancing two core parts of our mission -- knowledge and computing -- to deliver products that are built to help",
    likes: {
      likeCount: 1500,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Sundar",
    lastName: "Pichai",
    username: "sundarpichai",
    userPhoto:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Vishal is a gem. You must hire him !!",
    likes: {
      likeCount: 2800,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    userPhoto:
      "https://archinect.imgix.net/uploads/9h/9h2z333wsybwd4z0.jpg?auto=compress%2Cformat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
