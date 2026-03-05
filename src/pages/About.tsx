import { Target, Users, Hexagon } from 'lucide-react';

export default function About() {
    return (
        <div className="py-8 max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-tech-primary">TechNova</span></h1>
                <p className="text-tech-muted text-lg">Engineering the unbuildable.</p>
            </div>

            <div className="space-y-12">
                <section className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Hexagon className="h-48 w-48 text-tech-accent animate-pulse" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="text-tech-accent h-8 w-8" />
                            <h2 className="text-2xl font-bold">The Mission</h2>
                        </div>
                        <p className="text-tech-muted text-lg leading-relaxed mb-6">
                            Founded in 2024, our objective is to dismantle the barriers between complex mathematics
                            and practical software. We refuse to accept technological debt as an inevitability.
                            Our engineers build from first principles, delivering systems that withstand massive scale
                            without degrading performance.
                        </p>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="glass-panel p-8 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="text-tech-primary h-8 w-8" />
                            <h2 className="text-2xl font-bold">The Core Team</h2>
                        </div>
                        <p className="text-tech-muted leading-relaxed">
                            We are a collective of ex-FAANG engineers, algorithmic researchers, and open-source contributors.
                            We value deep technical understanding, rigor in testing, and elegant architectural design above all else.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl bg-tech-primary/5 border-tech-primary/20">
                        <h2 className="text-2xl font-bold mb-4 text-tech-primary">Our Stack</h2>
                        <ul className="space-y-3 text-tech-muted">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-tech-accent"></div>
                                React, Vue, WebGL
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-tech-accent"></div>
                                Node.js, Go, Rust
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-tech-accent"></div>
                                PostgreSQL, Redis, ClickHouse
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-tech-accent"></div>
                                Docker, Kubernetes, AWS
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
