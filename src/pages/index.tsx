import Head from 'next/head';

import styles from '../styles/pages/home.module.sass';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ig.News | 👋 Hey, welcome</title>
      </Head>
      
      <h1 className={styles.title}>Index <span>page</span></h1>
    </>
  )
}