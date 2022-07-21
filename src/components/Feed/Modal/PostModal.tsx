import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@atoms/modalAtom';
import { postListState } from '@atoms/postAtom';
import { Avatar } from '@components/Common';
import { MdClose } from 'react-icons/md';

export const PostModal = () => {
  const { data: session } = useSession();
  const { image: profile, name } = session?.user!;

  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const setModal = useSetRecoilState(modalState);
  const setNewPost = useSetRecoilState(postListState);

  const uploadPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        image: image,
        profile: profile as string,
        name: name as string,
        createAt: new Date().toString(),
      }),
    });

    const responseData = await response.json();
    console.log(responseData);

    closeModal();
  };

  const closeModal = () => setModal(false);

  return (
    <div className='overlay' onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='rounded-xl bg-white dark:bg-black w-full max-w-lg md:mt-[-22rem] mx-6  dark:text-white/75 border border-gray-400'
      >
        <div className='flex items-center justify-between border-b border-gray/75 px-4 py-3'>
          <h3 className='text-xl'>Create a post</h3>
          <button onClick={closeModal}>
            <MdClose />
          </button>
        </div>

        <div className='p-4'>
          <div className='flex items-center space-x-2'>
            <Avatar src={profile as string} w='30' h='30' />
            <p>{name}</p>
          </div>
          <form className='mt-3' onSubmit={uploadPost}>
            <textarea
              rows={4}
              placeholder='What do you want to talk about?'
              className='bg-transparent focus:outline-none w-full'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className='flex justify-between'>
              <input
                type='text'
                placeholder='Add a photo URL (optional)'
                className='bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <button
                className='bg-blue-400 hover:bg-blue-500 text-white rounded-full px-3.5 py-1 cursor-pointer disabled:bg-black/30'
                type='submit'
                disabled={!text.trim() && !image.trim()}
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
