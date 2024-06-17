import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <div className='flex items-center  w-full lg:w-[350px] relative rounded-[5px] overflow-hidden'>
      <FiSearch className='absolute left-3 text-lg' />
      <input
        type='text'
        placeholder='ค้นหา'
        className='text-md w-full py-2 px-3 pl-10 bg-white'
      />
    </div>
  );
};

export default Search;
