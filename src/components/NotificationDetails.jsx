import { IoCloseOutline } from 'react-icons/io5';

const NotificationDetails = ({ close }) => {
  return (
    <div
      className='absolute inset-0  grid place-items-center bg-opacity-50 backdrop-blur-[2px]'
      onClick={close}
    >
      <div className='w-[80%] h-[80%] bg-white rounded-[20px] bg-opacity-80 shadow-1 sm:p-3 md:p-5 lg-10'>
        <div className='flex justify-end'>
          <button
            className='grid place-items-center bg-[#EBEBEB] p-2 rounded-full'
            onClick={close}
          >
            <IoCloseOutline className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotificationDetails;
