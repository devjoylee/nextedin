import { useSession } from 'next-auth/react';
import { useSetRecoilState } from 'recoil';
import { Avatar } from '@components/Common';
import { modalState } from '@atoms/modalAtom';
import { BsImage, BsPlayBtnFill, BsCalendarDay, BsNewspaper } from 'react-icons/bs';

export const PostCreate = () => {
  const { data: session } = useSession();
  const setOpenModal = useSetRecoilState(modalState);

  return (
    <div className='bg-white dark:bg-black rounded-lg p-3 pb-0 thm-border'>
      <div className='flex items-center space-x-2'>
        <Avatar src={session?.user?.image as string} w='50' h='50' />
        <button
          className='w-full px-4 py-3 rounded-full border border-gray-400 hover:bg-gray-200 hover:dark:bg-gray-600 text-sm text-left thm-text-gray '
          onClick={() => setOpenModal(true)}
        >
          Start a post
        </button>
      </div>
      <ul className='buttonWrapper'>
        <li className='postButton group'>
          <BsImage className='text-[#0a66c2]' />
          <p>Photo</p>
        </li>
        <li className='postButton group'>
          <BsPlayBtnFill className='text-[#5f9b41]' />
          <p>Video</p>
        </li>
        <li className='postButton group'>
          <BsCalendarDay className='text-[#c37d16]' />
          <p>Event</p>
        </li>
        <li className='postButton group'>
          <BsNewspaper className='text-[#e16745]' />
          <p className='whitespace-nowrap'>Write Article</p>
        </li>
      </ul>
    </div>
  );
};
