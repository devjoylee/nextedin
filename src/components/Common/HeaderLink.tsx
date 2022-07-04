interface Props {
  text: string;
}

export const HeaderLink = ({ text }: Props) => {
  return (
    <div className='cursor-pointer flex flex-col justify-center items-center'>
      <span>Icon</span>
      <span className='text-sm'>{text}</span>
    </div>
  );
};
