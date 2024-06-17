'use client';

import { useAppContext } from '@/contexts/appContext';
import footerMenu from '@/utils/footerMenu';
import menu from '@/utils/menu';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloseSharp } from 'react-icons/io5';
import logoutIcon from '@/assets/icons/footer-icons/logout.png';

const Menu = () => {
  const { toggleMenu, isMenuOpen } = useAppContext();

  return (
    <aside
      className={`absolute lg:hidden top-0 right-0 bottom-0 w-[300px] h-screen py-5 px-5 shadow-4 bg-green-200 transition ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className='p-2 mb-5' onClick={toggleMenu}>
        <IoCloseSharp className='text-4xl text-red-500 hover:text-red-600' />
      </button>

      <div className='flex flex-col h-[90%] justify-between'>
        <ul className='flex flex-col gap-2'>
          {menu.map((menu) => {
            const { id, name, path, icon } = menu;
            return (
              <li key={id} className='flex items-center gap-3 px-5'>
                <Image
                  src={icon}
                  alt={name}
                  width={30}
                  height={30}
                  className='w-[30px] h-[30px]'
                />
                <Link
                  href={path}
                  className='text-sm tracking-wider text-white hover:text-green-500'
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className='flex flex-col gap-2 pt-10 border-t-2'>
          {footerMenu.map((menu) => {
            const { id, name, path, icon } = menu;
            return (
              <li key={id} className='flex items-center gap-3 px-5'>
                <Image
                  src={icon}
                  alt={name}
                  width={30}
                  height={30}
                  className='w-[30px] h-[30px]'
                />
                <Link
                  href={path}
                  className='text-sm tracking-wider text-white hover:text-green-500'
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          {/* //TODO: Handle logout */}
          <li className='flex items-center gap-3 px-5'>
            <Image
              src={logoutIcon}
              alt='logout icon'
              width={30}
              height={30}
              className='w-[30px] h-[30px]'
            />
            <button
              className='text-sm tracking-wider text-white hover:text-green-500'
              onClick={toggleMenu}
            >
              ออกจากระบบ
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Menu;
