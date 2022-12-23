import Head from 'next/head';

export const SEO = ({ title }: { title: string }) => {
  const text = title + ' | Nextedin';
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
};
