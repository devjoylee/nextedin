import type { NextPage } from 'next';
import Head from 'next/head';
import { FeedHeader, SideBar } from '@components/Feed';

const Feed: NextPage = () => {
  return (
    <div className='space-y-10 relative h-full dark:bg-[#0d1117]'>
      <Head>
        <title>Feed | LinkedIn</title>
      </Head>
      <FeedHeader />

      <main className='flex justify-center gap-x-5 px-4 sm:px-12 '>
        <div className='flex flex-col md:flex-row gap-x-5 px-4'>
          <SideBar />
          {/* Feed */}
        </div>
        {/* Widgets */}
      </main>
    </div>
  );
};

export default Feed;
