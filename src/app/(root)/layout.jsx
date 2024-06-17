import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import { AppContextProvider } from '@/contexts/appContext';

export default function RootLayout({ children }) {
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
