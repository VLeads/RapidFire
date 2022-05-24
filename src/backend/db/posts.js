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
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et moltibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 700,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    userPhoto:
      "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
