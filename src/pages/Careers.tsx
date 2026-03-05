import { Briefcase, Code, Terminal, ArrowRight } from 'lucide-react';

export default function Careers() {
    const jobs = [
        {
            role: 'Senior Distributed Systems Engineer',
            type: 'Full-time',
            location: 'Remote / US',
            icon: Terminal,
            tags: ['Rust', 'Kafka', 'Golang']
        },
        {
            role: 'Frontend Architect (React)',
            type: 'Full-time',
            location: 'San Francisco, CA',
            icon: Code,
            tags: ['React', 'WebGL', 'TypeScript']
        },
        {
            role: 'DevSecOps Engineer',
            type: 'Contract',
            location: 'Remote',
            icon: Briefcase,
            tags: ['Kubernetes', 'AWS', 'Zero-Trust']
        }
    ];

    return (
        <div className="py-8 animate-fade-in-up">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Join the <span className="text-tech-primary">Grid</span></h1>
                <p className="text-tech-muted text-lg max-w-2xl mx-auto">
                    We are always searching for exceptional talent. If you obsess over performance,
                    clean code, and scalable architecture, you belong here.
                </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
                {jobs.map((job, idx) => {
                    const JobIcon = job.icon;
                    return (
                        <div key={idx} className="glass-panel p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-tech-primary/40 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-tech-surface shrink-0 group-hover:bg-tech-primary/10 transition-colors">
                                    <JobIcon className="h-6 w-6 text-tech-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-tech-primary transition-colors">{job.role}</h3>
                                    <div className="text-tech-muted text-sm mt-1 mb-3 flex items-center gap-3">
                                        <span>{job.type}</span>
                                        <span className="w-1 h-1 rounded-full bg-tech-muted/50"></span>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {job.tags.map(tag => (
                                            <span key={tag} className="text-xs px-2 py-1 rounded bg-tech-surface text-tech-accent border border-tech-accent/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="sm:ml-4 shrink-0 mt-4 sm:mt-0 px-6 py-2 rounded-lg border border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-white transition-all font-medium flex items-center justify-center gap-2 w-full sm:w-auto">
                                Apply Now
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
