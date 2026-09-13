import { formatDate } from '@angular/common';
import { IComment, IUser } from "../comment";
import { COMMENT_DATE_FORMAT, COMMENT_LOCALE } from "../comment.config";

const getDateTime = (value: number): string => {
  let time = Date.now() - value;
  return formatDate(time, COMMENT_DATE_FORMAT, COMMENT_LOCALE)
}

export const TempData: {currentUser: IUser, comments: IComment[]} = {
  currentUser: {
    image: {
      png: 'assets/images/avatars/image-juliusomo.png',
      webp: 'assets/images/avatars/image-juliusomo.webp',
    },
    username: 'juliusomo',
  },
  comments: [
    {
      id: 1,
      content:
      "Loved this book. Wish i could read it again for the first time",
      createdAt: getDateTime(1000 * 3600 * 24 * 35),
      score: 12,
      user: {
        image: {
          png: 'assets/images/avatars/image-amyrobson.png',
          webp: 'assets/images/avatars/image-amyrobson.webp',
        },
        username: 'amyrobson',
      },
      replies: [],
    },
    {
      id: 2,
      content:
      "Loved the authors style of writing very captivating",
      createdAt: getDateTime(1000 * 3600 * 24 * 16),
      score: 5,
      user: {
        image: {
          png: 'assets/images/avatars/image-maxblagun.png',
          webp: 'assets/images/avatars/image-maxblagun.webp',
        },
        username: 'maxblagun',
      },
      replies: [
        {
          id: 3,
          content:
          "Would recommend this book. Good read",
          createdAt: getDateTime(1000 * 3600 * 24 * 8),
          score: 4,
          replyingTo: 'maxblagun',
          user: {
            image: {
              png: 'assets/images/avatars/image-ramsesmiron.png',
              webp: 'assets/images/avatars/image-ramsesmiron.webp',
            },
            username: 'ramsesmiron',
          },
          replies: [],
        },
        {
          id: 4,
          content:
          "5 stars",
          createdAt: getDateTime(1000 * 3600 * 24 * 2.3),
          score: 2,
          replyingTo: 'ramsesmiron',
          user: {
            image: {
              png: 'assets/images/avatars/image-juliusomo.png',
              webp: 'assets/images/avatars/image-juliusomo.webp',
            },
            username: 'juliusomo',
          },
          replies: []
        },
      ],
    },
  ],
};