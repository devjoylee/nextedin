import { HeaderLink } from './Common/HeaderLink';
import { MdPeopleAlt, MdOutlineSmartDisplay } from 'react-icons/md';
import { IoMdBriefcase, IoMdCompass } from 'react-icons/io';
import { HeaderLogo } from '@images';

export const Header = () => {
  return (
    <header className='flex justify-around items-center py-4'>
      <div className='relative w-36 cursor-pointer'>
        <HeaderLogo />
      </div>
      <div className='flex items-center sm:divide-x divide-gray-300'>
        <div className='hidden sm:flex space-x-8 pr-4'>
          <HeaderLink text='Discover' Icon={<IoMdCompass />} />
          <HeaderLink text='People' Icon={<MdPeopleAlt />} />
          <HeaderLink text='Learning' Icon={<MdOutlineSmartDisplay />} />
          <HeaderLink text='Jobs' Icon={<IoMdBriefcase />} />
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
