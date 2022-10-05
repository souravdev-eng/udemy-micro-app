export const CourseDetail = {
  id: '1',
  title: 'React Native for Designers',
  category: 'Programing',
  ratingAvg: 4.3,
  price: 40,
  originalPrice: 99,
  image: 'https://i.imgur.com/oN8yGGA.jpg',
  introVideo: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  totalReview: '2679',
  totalStudent: '66479',
  durationHours: 29.9,
  lessons: [
    {
      title: 'Introduction to React Native',
      videos: [
        {
          id: '1',
          title: 'Introduction to React Native',
          videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        },
        {
          id: '2',
          title: 'Setting up a New Project',
          videoUrl: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        },
      ],
    },
  ],
  aboutCourse:
    'Just updated with all new React Native features for 2022! Join a live online community of over 600,000+ developers and a course taught by industry experts that have actually worked both in Silicon Valley and Toronto with React Native.',
  preRequisite: ['A computer', 'Basic knowledge of javascript'],
};

/*
title: string;
  introVideo: string;
  category: string;
  ratingAvg: number;
  totalReview: number;
  totalStudent: number;
  originalPrice: number;
  price: number;
  creatorId: mongoose.Types.ObjectId;
  durationHours: number;
  lessons: { title: string; videos: [string] }[];
  aboutCourse: string;
  preRequisite: string[];

*/
