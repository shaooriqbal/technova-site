import { Link, useLocation } from 'react-router-dom';
import { Terminal, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const location = useLocation();

    const publicLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
    ];

    const privateLinks = [
        { name: 'Account Info', path: '/account' },
        { name: 'Data', path: '/data' },
    ];

    const navLinks = isAuthenticated ? [...publicLinks, ...privateLinks] : publicLinks;

    return (
        <nav className="fixed w-full z-50 glass-panel border-b border-t-0 border-x-0 border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <Terminal className="h-8 w-8 text-tech-accent group-hover:text-tech-primary transition-colors duration-300" />
                            <span className="font-bold text-xl tracking-tight hidden sm:block">
                                Tech<span className="text-tech-accent">Nova</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                        ? 'bg-tech-surface text-tech-accent shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                                        : 'text-tech-muted hover:text-white hover:bg-tech-surface/50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        {isAuthenticated ? (
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 bg-tech-surface hover:bg-red-500/10 hover:text-red-400 border border-tech-muted/20 hover:border-red-500/50 text-sm font-medium px-4 py-2 rounded-md transition-all duration-300"
                            >
                                <LogOut className="h-4 w-4" />
                                <span className="hidden sm:inline">Logout</span>
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2 text-tech-muted hover:text-white text-sm font-medium transition-colors"
                                >
                                    <LogIn className="h-4 w-4" />
                                    <span className="hidden sm:inline">Login</span>
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-tech-accent hover:bg-tech-primary text-tech-bg font-bold text-sm px-4 py-2 rounded-md glow-effect transition-all duration-300"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
