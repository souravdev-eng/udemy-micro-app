export interface CourseCardProps {
  id: string;
  title: string;
  subDescription: string;
  price: number;
  courseImage: string;
  whatWillLearn: string[] | null;
  preRequirement: string[] | null;
  language: string;
  ratingQty: number;
  ratingAvg: number;
  description: string;
  createdBy: string;
}
