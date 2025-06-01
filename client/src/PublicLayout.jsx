import { Outlet } from 'react-router-dom';
import Navbar from './beta-components/Navbar';
import Footer from './layout/Footer';

const PublicLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default PublicLayout;