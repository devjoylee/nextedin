import { ReactElement } from 'react';

interface Props {
  text: string;
  Icon: ReactElement;
}

export const HeaderLink = ({ text, Icon }: Props) => {
  return (
    <div className='cursor-pointer flex flex-col justify-center items-center opacity-60 hover:opacity-90'>
      {Icon}
      <span className='text-sm'>{text}</span>
    </div>
  );
};
