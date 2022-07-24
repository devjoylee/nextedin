import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { loadPostState, SSRPostState } from '@atoms/postAtom';
import { PostItem } from '@components/Feed';
import { Post } from '@types';

interface Props {
  posts: Post[];
}

export const PostList = ({ posts }: Props) => {
  const [realtimePost, setRealtimePost] = useState<Post[]>([]);
  const [loadPost, setLoadPost] = useRecoilState(loadPostState);
  const [SSRPost, setSSRPost] = useRecoilState(SSRPostState);

  // Get Post
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const responseData = await response.json();
      setRealtimePost(responseData);
      setLoadPost(false);
      setSSRPost(false);
    };

    fetchPosts();
  }, [loadPost]);

  return (
    <div className='space-y-3 mt-6'>
      {SSRPost
        ? posts.map((post) => <PostItem key={post._id} post={post} />)
        : realtimePost.map((post) => <PostItem key={post._id} post={post} />)}
    </div>
  );
};
