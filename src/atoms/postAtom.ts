import { Post } from '@types';
import { atom } from 'recoil';

export const postListState = atom({
  key: 'postListState',
  default: [{ text: '하하', image: '' }] as Post[],
});
