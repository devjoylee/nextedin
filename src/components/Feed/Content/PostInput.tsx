import { Avatar } from '@components/Common';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@atoms/modalAtom';
import { BsImage, BsPlayBtnFill, BsCalendarDay, BsNewspaper } from 'react-icons/bs';

export const PostInput = () => {
  const setOpenModal = useSetRecoilState(modalState);

  return (
    <div className='bg-white dark:bg-black rounded-lg p-3 space-y-3 border border-gray-300 dark:border-none'>
      <div className='flex items-center space-x-2'>
        <Avatar src='' w='50' h='50' />
        <button
          className='rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left'
          onClick={() => setOpenModal(true)}
        >
          Start a post
        </button>
      </div>
      <div className='flex items-center flex-wrap gap-4 justify-center md:gap-x-10'>
        <button className='inputButton group'>
          <BsImage className='text-[#0a66c2]' />
          <p className='opacity-80 group-hover:opacity-100'>Photo</p>
        </button>
        <button className='inputButton group'>
          <BsPlayBtnFill className='text-[#5f9b41]' />
          <p className='opacity-80 group-hover:opacity-100'>Video</p>
        </button>
        <button className='inputButton group'>
          <BsCalendarDay className='text-[#c37d16]' />
          <p className='opacity-80 group-hover:opacity-100'>Event</p>
        </button>
        <button className='inputButton group'>
          <BsNewspaper className='text-[#e16745]' />
          <p className='opacity-80 group-hover:opacity-100 whitespace-nowrap'>Write Article</p>
        </button>
      </div>
    </div>
  );
};
