import type { NextPage } from 'next';
import Head from 'next/head';
import { FeedHeader } from '@components/Feed';

const Feed: NextPage = () => {
  return (
    <div className='space-y-10 relative'>
      <Head>
        <title>Feed | LinkedIn</title>
      </Head>
      <FeedHeader />
    </div>
  );
};

export default Feed;
