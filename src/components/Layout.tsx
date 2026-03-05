import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
