import Head from 'next/head';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { getSession } from 'next-auth/react';
import { modalState } from '@atoms/modalAtom';
import * as C from '@components/Feed';
import { connectDB } from '@utils/connectDB';

export type ProviderType = InferGetServerSidePropsType<typeof getServerSideProps>;

const Feed: NextPage = ({ posts }: ProviderType) => {
  const openModal = useRecoilValue(modalState);

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
            <C.PostList posts={posts} />
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

  // Get posts on SSR
  const { db } = await connectDB();
  const posts = await db.collection('posts').find().sort({ timestamp: -1 }).toArray();

  return session
    ? {
        props: {
          session,
          posts: posts.map((post) => ({
            _id: post._id.toString(),
            text: post.text,
            image: post.image,
            profile: post.profile,
            username: post.username,
            createAt: post.createAt,
          })),
        },
      }
    : {
        redirect: {
          permanent: false,
          destination: '/home',
        },
      };
};
