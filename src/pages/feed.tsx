import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { modalState } from '@atoms/modalAtom';
import { FeedHeader, PostInput, PostModal, SideBar } from '@components/Feed';

const Feed: NextPage = () => {
  const openModal = useRecoilValue(modalState);

  return (
    <div className='space-y-10 relative h-full dark:bg-[#0d1117]'>
      <Head>
        <title>Feed | LinkedIn</title>
      </Head>
      <FeedHeader />

      <main className='flex justify-center gap-x-5 px-4 sm:px-12 '>
        <div className='flex flex-col md:flex-row md:gap-x-5 gap-y-5 px-4'>
          <SideBar />

          <div className='space-y-6 pb-24 max-w-lg'>
            <PostInput />
          </div>
          {/* Widgets */}
        </div>
        {openModal && <PostModal />}
      </main>
    </div>
  );
};

export default Feed;
