import { useState } from 'react';
import { Avatar } from '@components/Common';
import { Post } from '@types';
import { FaThumbsUp, FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';
import { RiSendPlaneFill, RiMoreFill, RiDeleteBin6Line } from 'react-icons/ri';
import moment from 'moment';
import { useSetRecoilState } from 'recoil';
import { loadPostState } from '@atoms/postAtom';
import { useSession } from 'next-auth/react';

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  const [liked, setLiked] = useState(false);
  const [truncText, setTruncText] = useState(true);
  const [openNav, setOpenNav] = useState(false);
  const { username, profile, image, text, createAt } = post;
  const setLoadPost = useSetRecoilState(loadPostState);

  const { data: session } = useSession();
  const { name } = session?.user!;

  // Delete Post
  const deletePost = async (id: string) => {
    const response = await fetch(`api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    setLoadPost(true);
  };

  return (
    <div className='bg-white dark:bg-black rounded-lg space-y-2 thm-border'>
      <div className='flex items-center p-2.5 pb-0 relative'>
        <Avatar src={profile} w='40' h='40' />
        <div className='ml-2 leading-none'>
          <p className='font-medium hover:text-blue-500 hover:underline cursor-pointer mt-1'>
            {username}
          </p>
          <span className='text-xs thm-text-gray'>{moment(createAt).fromNow()}</span>
        </div>

        {username === name && (
          <RiMoreFill
            className='ml-auto text-2xl text-gray-600 cursor-pointer'
            onClick={() => setOpenNav((prev) => !prev)}
          />
        )}

        {openNav && (
          <ul className='thm-border rounded-lg w-[180px] shadow-md absolute right-1 top-12 bg-white z-10'>
            <li
              className='flex items-center cursor-pointer hover:bg-gray-200 p-3'
              onClick={() => deletePost(post._id)}
            >
              <RiDeleteBin6Line className='text-xl mr-1.5' />
              Delete Post
            </li>
          </ul>
        )}
      </div>

      <div className='break-all md:break-normal px-2.5 relative'>
        <p className={`leading-snug	${truncText && 'trunc'}`}>{text}</p>
        {truncText && text.length > 120 && (
          <button
            className='absolute pr-2.5 bg-white bottom-[-2px] right-0 text-black/60 hover:text-blue-500 hover:underline'
            onClick={() => setTruncText((prev) => !prev)}
          >
            ...see more
          </button>
        )}
      </div>

      {image && <img src={image} alt='' className='w-full cursor-pointer' />}

      <ul className='buttonWrapper border-t border-gray-200 dark:border-gray-700 px-2.5'>
        <li className={`postButton ${liked && 'text-blue-500'}`} onClick={() => setLiked(!liked)}>
          {liked ? (
            <FaThumbsUp className='-scale-x-100' />
          ) : (
            <FaRegThumbsUp className='-scale-x-100' />
          )}
          <p>Like</p>
        </li>
        <li className='postButton'>
          <FaRegCommentDots />
          <p>Comment</p>
        </li>
        <li className='postButton'>
          <MdOutlineShare />
          <p>Share</p>
        </li>
        <li className='postButton'>
          <RiSendPlaneFill />
          <p>Send</p>
        </li>
      </ul>
    </div>
  );
};
