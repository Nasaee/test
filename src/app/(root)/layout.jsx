'use client';

import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import { AppContextProvider } from '@/contexts/appContext';
import { useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const router = useRouter();
  // TODO: handle auth here
  const isLogin = true;

  if (!isLogin) {
    router.push('/login');
  }

  return (
    <main className='h-screen w-full font-inter bg-softGreen-100 overflow-x-hidden relative'>
      <AppContextProvider>
        <Header />
        <Menu />
        <Navbar />
        <div>{children}</div>
      </AppContextProvider>
    </main>
  );
}
