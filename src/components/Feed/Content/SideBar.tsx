import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Avatar } from '@components/Common';
import { MdBookmark, MdAdd } from 'react-icons/md';
import Default from '@images/default-bg.jpg';

export const SideBar = () => {
  const { data: session } = useSession();
  const { image: profile, name, email } = session?.user!;

  return (
    <div className='space-y-2 min-w-max md:max-w-lg'>
      {/* Top */}
      <div className='bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center thm-border'>
        <div className='relative w-full h-14'>
          <Image src={Default} layout='fill' priority />
        </div>
        <div className='flex outline outline-2 outline-white rounded-full absolute top-6'>
          <Avatar src={profile as string} w='60' h='60' />
        </div>
        <div className='mt-5 py-4 space-x-0.5'>
          <p className='hover:underline decoration-purple-700 cursor-pointer'>{name}</p>
          <p className='thm-text-gray text-sm'>{email}</p>
        </div>

        <div className='hidden md:inline text-left dark:text-white/75 text-sm'>
          <div className='font-medium sidebarButton space-y-0.5'>
            <div className='flex justify-between space-x-2'>
              <p>Who viewed your profile</p>
              <span className='text-blue-500'>321</span>
            </div>
            <div className='flex justify-between space-x-2'>
              <p>Views of your post</p>
              <span className='text-blue-500'>1,892</span>
            </div>
          </div>

          <div className='sidebarButton'>
            <p className='leading-4 text-xs'>Access exclusive tools & insights</p>
            <p className='dark:text-white font-medium'>
              <span className='w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1' />
              Try Premium for free
            </p>
          </div>

          <div className='sidebarButton flex items-center space-x-1.5'>
            <MdBookmark className='!-ml-1' />
            <p className='dark:text-white font-medium'>My items</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='hidden md:flex bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 thm-border'>
        <p className='sidebarLink'>Groups</p>
        <p className='sidebarLink flex items-center justify-between'>
          Events
          <MdAdd className='h-5 thm-text-gray' />
        </p>
        <p className='sidebarLink'>Followed Hashtags</p>
        <div className='sidebarButton text-center'>
          <p className='dark:text-white/75 font-medium text-sm'>Discover More</p>
        </div>
      </div>
    </div>
  );
};
