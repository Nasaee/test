import { nanoid } from 'nanoid';
import {
  home,
  manipulateData,
  mainData,
  information,
  report,
  informationGFMIS,
  reportGFMIS,
} from '../assets/icons';

const menu = [
  {
    id: nanoid(),
    name: 'หน้าหลัก',
    path: '/',
    icon: home,
    subMenu: {},
  },
  {
    id: nanoid(),
    name: 'บันทึกและแก้ไขข้อมูล',
    path: '/manipulate-data',
    icon: manipulateData,
    subMenu: {},
  },
  {
    id: nanoid(),
    name: 'แฟ้มข้อมูลหลัก',
    path: '/main-data',
    icon: mainData,
    subMenu: {},
  },
  {
    id: nanoid(),
    name: 'สอบถามข้อมูล',
    path: '/information',
    icon: information,
    subMenu: {},
  },
  {
    id: nanoid(),
    name: 'รายงาน',
    path: '/report',
    icon: report,
    subMenu: {},
  },
  {
    id: nanoid(),
    name: 'สอบถามข้อมูล (GFMIS)',
    path: '/information-gfmis',
    icon: informationGFMIS,
    subMenu: {},
  },
  {
    id: nanoid(),
    name: 'ระบบรายงาน (GFMIS)',
    path: 'report-gfmis',
    icon: reportGFMIS,
    subMenu: {},
  },
];

export default menu;
