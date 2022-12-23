import { getProviders } from 'next-auth/react';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { LoginHeader, LoginContent } from '@components/Login';
import { SEO } from '@components/Common';

export type ProviderType = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage = ({ providers }: ProviderType) => {
  return (
    <div className='space-y-10 relative h-full'>
      <SEO title='Sign In' />
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
