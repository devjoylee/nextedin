import Head from 'next/head';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { getSession, useSession } from 'next-auth/react';
import { modalState } from '@atoms/modalAtom';
import * as C from '@components/Feed';

const Feed: NextPage = () => {
  const openModal = useRecoilValue(modalState);
  const { data: session } = useSession();

  return (
    <div className='relative min-h-full dark:bg-[#0d1117]'>
      <Head>
        <title>Feed | LinkedIn</title>
      </Head>
      <C.FeedHeader />

      <main className='max-w-screen-lg mx-auto py-10'>
        <div className='flex flex-col md:flex-row md:gap-x-5 gap-y-5 px-4'>
          <C.SideBar />

          <div className='md:max-w-xl w-full'>
            <C.AddPost />
            <C.PostList />
          </div>
          {/* Widgets */}
        </div>
        {openModal && <C.PostModal />}
      </main>
    </div>
  );
};

export default Feed;

export const getServerSideProps = async (context: any) => {
  // Check if the user is authenticated on the sever...
  const session = await getSession(context);

  return session
    ? { props: { session } }
    : {
        redirect: {
          permanent: false,
          destination: '/home',
        },
      };
};
