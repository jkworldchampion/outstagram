import { USERS } from './users'


export const POST = [
  {
    imageurl: 'https://lh3.googleusercontent.com/oBVDo-bjvpQopwFSMQcLOKUfomgCFgMiF5Q9OrpSCrSyAcYb58-yhTbC10xc_xKtlb96ZzRmAxeX33A6qWmsA_4Z7b2RbD_was5tOpwk6NFBzw=w960-rj-nu-e365',
    user: USERS[0].user,
    likes: 7870,
    caption: 'This is my first stage!!🥰. Thanks to your love💖',
    profile_picture: USERS[0].image,
    comments : [
      {
        user: 'kevin',
        comment: 'Wow!! Goooood'
      },
      {
        user: 'Alex',
        comment: 'Veeeery, Nice'
      },
      {
        user: 'juhwan',
        comment: 'Veeeery, good'
      },
    ],
  },
  {
    imageurl: 'https://thumb.mt.co.kr/06/2021/01/2021010919078223377_1.jpg/dims/optimize/',
    user: USERS[1].user,
    likes: 10470,
    caption: 'This is my comeback stage',
    profile_picture: USERS[1].image,
    comments : [
      {
        user: 'sueeeeeil',
        comment: 'Nice, I really waited your comeback!!!'
      },
      
    ],
  },
]