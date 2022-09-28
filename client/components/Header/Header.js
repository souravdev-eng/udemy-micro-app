import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={`${styles.grid} ${styles.grid__3__cols}`}>
      <div className={styles.logo__container}>
        <img src={'/static/img/logo.png'} className={styles.logo__img} />
        <h2 className={styles.logo}>Udemy</h2>
        <div>
          <span>Categories</span>
        </div>
      </div>
      <div className={styles.search__box__container}>
        <input type='text' placeholder='Search for anything' className={styles.searchBox} />
      </div>
      <div className={styles.flex__direction__row}>
        <ul className={`${styles.flex__direction__row}`}>
          <li className={styles.list__items}>
            <a href='#' className={styles.link}>
              Udemy Business
            </a>
          </li>
          <li className={styles.list__items}>
            <a className={styles.link} href='#'>
              Teach on Udemy
            </a>
          </li>
          <li className={styles.list__items}>
            <a className={styles.link} href='#'>
              My learning
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
