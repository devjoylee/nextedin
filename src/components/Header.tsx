import { HeaderLink } from './Common/HeaderLink';

export const Header = () => {
  return (
    <header className='flex justify-around items-center py-4'>
      <div className='relative w-36 h-10'>
        <div>Linkedin</div>
      </div>
      <div className='flex items-center sm:divide-x divide-gray-300'>
        <div className='hidden sm:flex space-x-8 pr-4'>
          <HeaderLink text='Discover' />
          <HeaderLink text='People' />
          <HeaderLink text='Learning' />
          <HeaderLink text='Jobs' />
        </div>
        <div className='pl-4'>
          <button className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5'>
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};
