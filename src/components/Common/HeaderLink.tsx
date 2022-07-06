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
      className={`relative cursor-pointer flex flex-col justify-center items-center opacity-70 hover:opacity-100 ${
        active && 'opacity-90'
      }`}
    >
      <div className='text-2xl'>{Icon}</div>

      <p
        className={`text-sm whitespace-nowrap ${
          !login && 'hidden md:flex justify-center w-full mx-auto'
        }`}
      >
        {text}
      </p>

      {active && (
        <span className='hidden md:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full absolute top-12' />
      )}
    </li>
  );
};
