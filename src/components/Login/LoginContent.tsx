import { FiChevronRight } from 'react-icons/fi';
import { IllustLogin } from '@images';

export const LoginContent = () => {
  return (
    <main className='flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto'>
      <div className='space-y-6 xl:space-y-10 z-50'>
        <h1 className='text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0'>
          Welcome to your professional community
        </h1>
        <div className='space-y-4'>
          <div className='login-nav'>
            <p className='text-xl'>Search for a job</p>
            <FiChevronRight className='text-gray-700' />
          </div>
          <div className='login-nav'>
            <p className='text-xl'>Find a person you know</p>
            <FiChevronRight className='text-gray-700' />
          </div>
          <div className='login-nav'>
            <p className='text-xl'>Learn a new skill</p>
            <FiChevronRight className='text-gray-700' />
          </div>
        </div>
      </div>
      <div className='relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] xl:top-14 xl:right-20 mt-10'>
        <IllustLogin />
      </div>
    </main>
  );
};
