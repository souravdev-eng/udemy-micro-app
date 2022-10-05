import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import CourseCard from '../CourseCard';

const CourseList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Because you viewed “
        <span className={styles.title_blue}>
          Complete Machine Learning & Data Science Bootcamp 2022
        </span>
        ”
      </h2>
      <CourseCard />
    </div>
  );
};

export default CourseList;
