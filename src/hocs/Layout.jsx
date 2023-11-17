import Footer from '@/features/footer';
import Navbar from '@/features/navbar';

export default function Layout({ children }) {
  return (
    <div className="dark:bg-dark-bg">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
