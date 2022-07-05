import { ReactElement } from 'react';

interface Props {
  text: string;
  Icon: ReactElement;
  user?: boolean;
  login?: boolean;
  active?: boolean;
}

export const HeaderLink = ({ text, Icon, user, login, active }: Props) => {
  return (
    <li
      className={`cursor-pointer flex flex-col justify-center items-center opacity-70 hover:opacity-100 ${
        active && 'opacity-100'
      }`}
    >
      {Icon}

      <span className={`text-sm ${!login && 'hidden lg:flex justify-center w-full mx-auto'}`}>
        {text}
      </span>

      {active && (
        <span className='hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black rounded-t-full' />
      )}
    </li>
  );
};
