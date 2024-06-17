'use client';

import Image from 'next/image';
import { useState } from 'react';
import NotificationDetails from './NotificationDetails';

const Notification = () => {
  // TODO: Handle show now notification here
  const isNotificationExist = true;
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <div className='relative'>
        <button onClick={() => setShowNotification(true)}>
          <Image
            src='/notification.png'
            alt='notification'
            width={35}
            height={35}
            className='w-[30px] h-[30px] xl:w-[35px] xl:h-[35px]'
          />
        </button>
        {/* show if new notification */}
        {isNotificationExist && (
          <div className='absolute top-[4px] right-[4px] bg-red-600 w-[12px] h-[12px] rounded-full border-2 border-black' />
        )}
      </div>
      {showNotification && (
        <NotificationDetails close={() => setShowNotification(false)} />
      )}
    </>
  );
};

export default Notification;
