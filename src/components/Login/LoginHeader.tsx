import { MdPeopleAlt, MdOutlineSmartDisplay } from 'react-icons/md';
import { IoMdBriefcase, IoMdCompass } from 'react-icons/io';
import { HeaderLink } from '@components/Common';
import { WideLogo } from '@images';

export const LoginHeader = () => {
  return (
    <header className='flex justify-around items-center py-4'>
      <div className='relative w-36 cursor-pointer'>
        <WideLogo />
      </div>
      <div className='flex items-center sm:divide-x divide-gray-300'>
        <ul className='hidden sm:flex space-x-8 pr-4'>
          <HeaderLink text='Discover' Icon={<IoMdCompass />} login />
          <HeaderLink text='People' Icon={<MdPeopleAlt />} login />
          <HeaderLink text='Learning' Icon={<MdOutlineSmartDisplay />} login />
          <HeaderLink text='Jobs' Icon={<IoMdBriefcase />} login />
        </ul>
        <div className='pl-4'>
          <button className='text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5'>
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
