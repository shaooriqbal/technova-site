import { Database, Cloud, Shield, TerminalSquare } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: 'Cloud Infrastructure Architecture',
            desc: 'Scalable multi-cloud deployments utilizing Kubernetes, Terraform, and advanced GitOps CI/CD pipelines.',
            icon: Cloud,
            color: 'text-blue-400'
        },
        {
            title: 'Zero-Trust Cybersecurity',
            desc: 'Enterprise-grade security auditing, penetration testing, and identity access management implementation.',
            icon: Shield,
            color: 'text-green-400'
        },
        {
            title: 'Real-time Big Data Analytics',
            desc: 'Data lakes and streaming data processing using Kafka, Spark, and optimized columnar databases.',
            icon: Database,
            color: 'text-purple-400'
        },
        {
            title: 'Custom Software Engineering',
            desc: 'Full-stack application development in Go, Rust, and React. Built for fault-tolerance and scale.',
            icon: TerminalSquare,
            color: 'text-orange-400'
        }
    ];

    return (
        <div className="py-8 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise <span className="text-tech-accent">Services</span></h1>
                <p className="text-tech-muted max-w-2xl mx-auto">
                    We provide cutting-edge technological frameworks and bespoke engineering
                    solutions to modernize traditional operations.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((svc, idx) => {
                    const IconComponent = svc.icon;
                    return (
                        <div key={idx} className="glass-panel p-8 rounded-xl border border-white/5 hover:border-tech-accent/30 transition-colors group">
                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-lg bg-tech-surface ${svc.color} group-hover:scale-110 transition-transform`}>
                                    <IconComponent className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{svc.title}</h3>
                                    <p className="text-tech-muted leading-relaxed">{svc.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
