import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <main className='h-screen w-full font-inter bg-softGreen-100'>
      <Header />
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
