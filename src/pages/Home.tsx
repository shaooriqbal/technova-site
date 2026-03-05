import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col gap-16 py-8">
            {/* Hero Section */}
            <section className="text-center space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-accent/10 text-tech-accent border border-tech-accent/20 mb-4">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-semibold tracking-wide uppercase">Next-Gen Solutions</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    Pioneering the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-primary to-tech-accent">
                        Digital Frontier
                    </span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-tech-muted">
                    We build high-performance, scalable, and secure technologies tailored for the innovators of tomorrow.
                </p>
                <div className="flex items-center justify-center gap-4 pt-4">
                    <Link to="/services" className="bg-tech-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md glow-effect transition-all flex items-center gap-2">
                        Explore Tech
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link to="/about" className="glass-panel hover:bg-white/5 font-semibold py-3 px-8 rounded-md transition-all border border-tech-muted/30">
                        Our Mission
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-tech-surface w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <Cpu className="h-6 w-6 text-tech-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
                    <p className="text-tech-muted leading-relaxed">
                        Integrating intelligent algorithms into core systems to automate decisions and uncover deep insights.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 border-tech-accent/20">
                    <div className="bg-tech-surface w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <Network className="h-6 w-6 text-tech-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Decentralized Systems</h3>
                    <p className="text-tech-muted leading-relaxed">
                        Building robust, trustless block-chain networks and web3 infrastructure for enterprise scale.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="bg-tech-surface w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <Zap className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">High-Performance APIs</h3>
                    <p className="text-tech-muted leading-relaxed">
                        Lightning-fast, strictly-typed GraphQL and REST architectures responding in under 100ms.
                    </p>
                </div>
            </section>
        </div>
    );
}
