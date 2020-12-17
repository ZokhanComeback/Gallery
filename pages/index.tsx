import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
};

export default Index;
