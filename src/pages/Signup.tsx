import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            login();
            navigate('/account');
        }, 800);
    };

    return (
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-8rem)]">
            <div className="max-w-md w-full space-y-8 glass-panel p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <UserPlus className="w-32 h-32 text-tech-primary transform -rotate-12" />
                </div>

                <div className="text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tech-surface mb-4 glow-effect">
                        <UserPlus className="w-8 h-8 text-tech-accent" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Create Account</h2>
                    <p className="text-tech-muted">Join TechNova today and get started</p>
                </div>

                <form className="mt-8 space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-tech-muted mb-1" htmlFor="name">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-tech-muted" />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-tech-muted/20 rounded-md bg-tech-surface/50 text-white placeholder-tech-muted/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50 focus:border-tech-accent transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-tech-muted mb-1" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-tech-muted" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-tech-muted/20 rounded-md bg-tech-surface/50 text-white placeholder-tech-muted/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50 focus:border-tech-accent transition-all duration-300"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-tech-muted mb-1" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-tech-muted" />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-tech-muted/20 rounded-md bg-tech-surface/50 text-white placeholder-tech-muted/50 focus:outline-none focus:ring-2 focus:ring-tech-accent/50 focus:border-tech-accent transition-all duration-300"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-tech-bg bg-tech-accent hover:bg-tech-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tech-accent transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'glow-effect'}`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-tech-bg border-t-transparent rounded-full animate-spin"></div>
                                    Creating account...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Sign Up
                                    <CheckCircle2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </span>
                            )}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-tech-muted relative z-10">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-tech-accent hover:text-tech-primary transition-colors">
                        Sign in instead
                    </Link>
                </div>
            </div>
        </div>
    );
}
