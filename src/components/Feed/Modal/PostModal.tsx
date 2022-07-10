import { modalState } from '@atoms/modalAtom';
import { Avatar } from '@components/Common';
import { MdClose } from 'react-icons/md';

export const PostModal = () => {
  return (
    <div className='overlay'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='rounded-xl bg-white dark:bg-black w-full max-w-lg md:mt-[-22rem] mx-6  dark:text-white/75'
      >
        <div className='flex items-center justify-between border-b border-gray/75 px-4 py-3'>
          <h3 className='text-xl'>Create a post</h3>
          <button>
            <MdClose />
          </button>
        </div>

        <div className='p-4'>
          <div className='flex items-center space-x-2'>
            <Avatar src='' w='30' h='30' />
            <p>name</p>
          </div>
          <form className='mt-3' onClick={(e) => e.preventDefault()}>
            <textarea
              rows={4}
              placeholder='What do you want to talk about?'
              className='bg-transparent focus:outline-none w-full'
            />
            <div className='flex justify-between'>
              <input
                type='text'
                placeholder='Add a photo URL (optional)'
                className='bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm'
              />
              <button
                className='font-medium bg-blue-400 hover:bg-blue-500 text-white rounded-full px-3.5 py-1'
                type='submit'
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
