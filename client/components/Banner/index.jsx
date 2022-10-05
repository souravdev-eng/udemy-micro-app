import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const Banner = () => {
  return (
    <div className={styles.image_container}>
      <Image
        src='/static/img/banner.jpg'
        layout='fill'
        className={styles.image}
        width={760}
        // height={380}
        objectFit='contain'
      />
    </div>
  );
};

export default Banner;
