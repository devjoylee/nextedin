import { getProviders } from 'next-auth/react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import { LoginHeader, LoginContent } from '@components/Login';

export type ProviderType = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage = ({ providers }: ProviderType) => {
  return (
    <div className='space-y-10 relative h-full'>
      <Head>
        <title>Sign In | LinkedIn</title>
      </Head>
      <LoginHeader providers={providers} />
      <LoginContent />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return { props: { providers } };
};
