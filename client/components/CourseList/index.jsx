import React from 'react';
import styles from './styles.module.css';
import CourseCard from '../CourseCard';
import Link from 'next/link';

const CourseList = ({ title, tag, data, onClick }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title} {tag && <span className={styles.title_blue}>"{tag}"</span>}
      </h2>
      <div className={styles.row}>
        {data.map((el, index) => (
          <Link href={`/course-details/${index}`}>
            <CourseCard key={index} onClick={onClick} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
