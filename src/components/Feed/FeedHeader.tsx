import { HeaderLink } from '@components/Common';
import { SearchBar } from '@components/Feed';
import { BsChatDotsFill, BsBellFill } from 'react-icons/bs';
import { MdPeopleAlt, MdOutlineApps } from 'react-icons/md';
import { IoMdBriefcase, IoMdHome } from 'react-icons/io';
import { NarrowLogo } from '@images';

export const FeedHeader = () => {
  return (
    <header className='sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around px-3'>
      {/* Left */}
      <div className='flex items-center space-x-2 w-full max-w-xs py-2'>
        <NarrowLogo width={55} height={40} />
        <SearchBar />
      </div>

      {/* Right */}
      <ul className='flex items-center space-x-6'>
        <HeaderLink Icon={<IoMdHome />} text='Home' active />
        <HeaderLink Icon={<MdPeopleAlt />} text='My Network' />
        <HeaderLink Icon={<IoMdBriefcase />} text='Jobs' />
        <HeaderLink Icon={<BsChatDotsFill />} text='Messaging' />
        <HeaderLink Icon={<BsBellFill />} text='Notifications' />
        <HeaderLink Icon={<IoMdBriefcase />} text='Me' />
        <HeaderLink Icon={<MdOutlineApps />} text='Work' />
      </ul>
    </header>
  );
};
