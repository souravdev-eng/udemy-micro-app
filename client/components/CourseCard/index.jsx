import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const CourseCard = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <Image
        src={'https://i.imgur.com/oN8yGGA.jpg'}
        className={styles.image}
        width='180'
        height='150'
        objectFit='cover'
      />

      <span className={styles.title}>
        2022 Python for Machine Learning & Data Science Masterclass 2022 Python for Machine Learning
        & Data Science Masterclass Masterclass
      </span>
      <div>
        <span className={styles.rating}>4.8</span>
        <span className={styles.review}>(12,429)</span>
      </div>
      <span className={styles.creator_name}>Andrew Smith</span>
      <span className={styles.price}>$350</span>
    </div>
  );
};

export default CourseCard;
