import Image from 'next/image';
import Search from './Search';
import Notification from './Notification';

const Header = () => {
  const user = { name: 'ธรรมรัตน์', lastName: 'บุญญาพร' };
  return (
    <header className='flex items-center justify-between gap-5 px-8 py-2 background-gradient-horizontal'>
      <div className='flex items-center gap-5'>
        <div>
          <Image src='/logo.png' alt='logo' width={60} height={60} />
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className='text-lg font-bold'>
            ระบบติดตามประเมินผลการดำเนินการงานตามแผนปฏิบัติราชการ
          </h1>
          <p className='text-xs font-bold'>
            กรมพัฒนาสังคมและสวัสดิการ กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
          </p>
        </div>
      </div>
      <div className='flex items-center gap-5 '>
        <div className=''>
          <Search />
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2 tracking-wide'>
            <p>สวัสดี</p>
            <p>{`คุณ${user.name} ${user.lastName}`}</p>
          </div>
          <div>
            <Notification />
          </div>
          <div>menu</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
