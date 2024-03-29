import Head from 'next/head';
import Banner from '../components/Banner';
import CourseList from '../components/CourseList';
import Header from '../components/Header/Header';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handelNavigation = () => {
    //
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Udemy Clone</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.container}>
        {/* <Banner /> */}
        <CourseList
          title='Because you viewed'
          tag='Complete Machine Learning & Data Science Bootcamp 2022'
          data={[1, 2, 3, 4, 5]}
          onClick={handelNavigation}
        />
        <CourseList title='Recommended for you' data={[1, 2, 3, 4, 5]} />
        <CourseList title='Because you searched for' tag='react' data={[1, 2, 3, 4, 5]} />
      </main>
    </div>
  );
}
