import Image from 'next/image';
import Default from '@images/default-profile.jpg';

interface Props {
  src?: string;
  w: string;
  h: string;
}

export const Avatar = ({ src, w, h }: Props) => {
  return (
    <Image
      src={src || Default}
      className='!block rounded-full cursor-pointer'
      width={w}
      height={h}
    />
  );
};
