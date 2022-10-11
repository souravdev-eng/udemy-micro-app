import React from 'react';
import Image from 'next/image';
import styles from '../../styles/CourseDetails.module.css';

const CourseDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_preview}>
        <div className={styles.center}>
          <div className={styles.course_preview}>
            <div className={styles.course_video}>
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                  src={'https://i.imgur.com/oN8yGGA.jpg'}
                  layout='fill'
                  objectFit='cover'
                  className={styles.image}
                />
              </div>
            </div>
            <span className={styles.price}>₹3,499</span>
            <div className={styles.addToCart_btn}>
              <span className={styles.textBold_white}>Add to cart</span>
            </div>
            <div className={styles.buy_btn}>
              <span className={styles.textBold_black}>Buy Now</span>
            </div>
          </div>

          <div className={styles.course_details}>
            <h2 className={styles.title}>Microservices with Node JS and React</h2>
            <span className={styles.description}>
              Build, deploy, and scale an E-Commerce app using Microservices built with Node, React,
              Docker and Kubernetes
            </span>
            <div>
              {/* Bestseller */}
              {/* Rating AVG */}
              {/* Starts */}
              {/* Total ratings */}
              {/* Total student */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
