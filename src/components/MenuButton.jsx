'use client';

import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import footerMenu from '@/utils/footerMenu';
import Image from 'next/image';
import Link from 'next/link';
import logoutIcon from '@/assets/icons/footer-icons/logout.png';
import { IoCloseSharp } from 'react-icons/io5';
import { useAppContext } from '@/contexts/appContext';

const MenuButton = () => {
  const { toggleMenu, isMenuOpen } = useAppContext();

  const onClick = () => {
    toggleMenu();
  };

  return (
    <div className='grid place-items-center relative'>
      <button onClick={onClick}>
        {isMenuOpen ? (
          <IoCloseSharp className='text-4xl text-red-500 hover:text-red-600' />
        ) : (
          <MdMenu className='text-4xl hover:text-green-400' />
        )}
      </button>

      {isMenuOpen && (
        <div className='hidden lg:block absolute bottom-[-200px] right-0 bg-green-200 w-[180px] h-[190px] p-5 rounded-[5px] shadow-4'>
          <ul className='flex flex-col gap-2'>
            {footerMenu.map((menu) => {
              const { id, name, path, icon } = menu;
              return (
                <li key={id} className='flex items-center gap-2'>
                  <Image
                    src={icon}
                    alt={name}
                    width={30}
                    height={30}
                    className='w-[30px] h-[30px]'
                  />
                  <Link
                    href={path}
                    onClick={toggleMenu}
                    className='text-sm tracking-wider text-white hover:text-green-500'
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            <li className='flex items-center gap-2'>
              <Image
                src={logoutIcon}
                alt='logout icon'
                width={30}
                height={30}
                className='w-[30px] h-[30px]'
              />
              {/* //TODO: Handle logout */}
              <button className='text-sm tracking-wider text-white hover:text-green-500'>
                ออกจากระบบ
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default MenuButton;
