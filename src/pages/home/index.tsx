import type { NextPage } from 'next';
import Head from 'next/head';
import { LoginHeader, LoginContent } from '@components/Login';

const Home: NextPage = () => {
  return (
    <div className='space-y-10 relative h-full'>
      <Head>
        <title>Sign In | LinkedIn</title>
      </Head>
      <LoginHeader />
      <LoginContent />
    </div>
  );
};

export default Home;