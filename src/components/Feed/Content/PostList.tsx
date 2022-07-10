import { useRecoilValue } from 'recoil';
import { postListState } from '@atoms/postAtom';
import { PostItem } from '@components/Feed';

export const PostList = () => {
  const postList = useRecoilValue(postListState);

  return (
    <div className='space-y-3 mt-6'>
      {postList.map((post, i) => (
        <PostItem key={i} post={post} />
      ))}
    </div>
  );
};
