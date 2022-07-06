import { GoSearch } from 'react-icons/go';

export const SearchBar = () => {
  return (
    <div className='flex items-center px-4 py-2 rounded w-full bg-[#eef3f8] dark:bg-[#1b1d23]'>
      <GoSearch />
      <input
        type='text'
        placeholder='Search'
        className='hidden md:inline-flex bg-transparent text-sm focus:outline-none  w-full ml-3'
      />
    </div>
  );
};
