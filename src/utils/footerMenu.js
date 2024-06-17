import { nanoid } from 'nanoid';
import { personalInfo, setting, question } from '../assets/icons/footer-icons';

const footerMenu = [
  {
    id: nanoid(),
    name: 'ข้อมูลส่วนตัว',
    path: '/',
    icon: personalInfo,
  },
  {
    id: nanoid(),
    name: 'ตั้งค่า',
    path: '/',
    icon: setting,
  },
  {
    id: nanoid(),
    name: 'สอบถาม',
    path: '/',
    icon: question,
  },
];

export default footerMenu;
