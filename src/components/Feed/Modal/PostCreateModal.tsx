import { useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '@atoms/modalAtom';
import { loadPostState } from '@atoms/postAtom';
import { Avatar } from '@components/Common';
import { MdClose } from 'react-icons/md';

export const PostCreateModal = () => {
  const { data: session } = useSession();
  const { image: profile, name } = session?.user!;

  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const setModal = useSetRecoilState(modalState);
  const setLoadPost = useSetRecoilState(loadPostState);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

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
        username: name as string,
        createAt: new Date().toString(),
      }),
    });

    const responseData = await response.json();
    console.log(responseData);

    closeModal();
    setLoadPost(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };
  const closeModal = () => setModal(false);

  return (
    <div className='overlay' onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className='rounded-xl bg-white dark:bg-black w-full max-w-lg dark:text-white/75 border border-gray-400 absolute top-12'
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
              className='bg-transparent focus:outline-none w-full resize-none max-h-[250px]'
              value={text}
              onChange={handleChange}
              ref={textAreaRef}
            />
            <div className='flex justify-between'>
              <input
                type='text'
                placeholder='Add a photo URL (optional)'
                className='focus:outline-none truncate flex-1 mr-1'
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
