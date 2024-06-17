import Image from 'next/image';
import Search from './Search';
import Notification from './Notification';
import Menu from './Menu';

const Header = () => {
  const user = { name: 'ธรรมรัตน์', lastName: 'บุญญาพร' };
  return (
    <header className='flex items-center justify-between gap-5 px-8 py-2 background-gradient-horizontal'>
      <div className='flex items-center gap-5'>
        <div>
          <Image src='/logo.png' alt='logo' width={60} height={60} />
        </div>
        <div className='hidden lg:flex flex-col gap-1'>
          <h1 className='text-[14px] xl:text-lg font-bold'>
            ระบบติดตามประเมินผลการดำเนินการงานตามแผนปฏิบัติราชการ
          </h1>
          <p className='text-[10px] xl:text-xs font-bold'>
            กรมพัฒนาสังคมและสวัสดิการ กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
          </p>
        </div>
      </div>
      <div className='flex items-center gap-5 '>
        <div className=''>
          <Search />
        </div>
        <div className='flex items-center gap-3 xl:gap-5'>
          <div className='hidden md:flex items-center gap-1 tracking-wide text-sm xl:text-base'>
            <p className='hidden 2xl:block'>สวัสดี</p>
            <p>{`คุณ${user.name} ${user.lastName}`}</p>
          </div>
          <div>
            <Notification />
          </div>
          <div className='grid place-items-center'>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
