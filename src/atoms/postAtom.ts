import { atom } from 'recoil';

export const loadPostState = atom({
  key: 'loadPostState',
  default: false,
});

export const SSRPostState = atom({
  key: 'SSRPostState',
  default: true,
});
