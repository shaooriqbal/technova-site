import { Terminal } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-tech-surface py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <Terminal className="h-6 w-6 text-tech-accent" />
                    <span className="font-bold text-lg">TechNova</span>
                </div>
                <p className="text-tech-muted text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} TechNova Inc. Accelerating the future.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-tech-muted hover:text-tech-accent transition-colors">Privacy</a>
                    <a href="#" className="text-tech-muted hover:text-tech-accent transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}
