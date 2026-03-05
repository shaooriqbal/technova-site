import { User, Mail, MapPin, Building, Calendar, Github, Twitter, Globe, Edit2, Activity, Star, Code } from 'lucide-react';

export default function AccountInfo() {
    return (
        <div className="py-8 space-y-8 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Account Profile</h1>
                    <p className="text-tech-muted">Manage your personal information and preferences.</p>
                </div>
                <button className="flex items-center gap-2 bg-tech-surface hover:bg-tech-surface/80 text-white font-medium px-4 py-2 rounded-md border border-tech-muted/20 transition-all duration-300">
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Avatar and Basic Info */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="glass-panel p-6 rounded-xl flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-tech-accent/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                        <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-br from-tech-accent to-tech-primary mb-4 glow-effect">
                            <div className="w-full h-full bg-tech-bg rounded-full flex items-center justify-center overflow-hidden">
                                <User className="w-16 h-16 text-tech-muted" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-1">Alex Developer</h2>
                        <p className="text-tech-accent font-medium mb-4">Senior Software Engineer</p>

                        <div className="w-full space-y-3 text-left border-t border-tech-muted/20 pt-4">
                            <div className="flex items-center text-sm text-tech-muted">
                                <Mail className="w-4 h-4 mr-3 text-tech-primary" />
                                alex@technova.example.com
                            </div>
                            <div className="flex items-center text-sm text-tech-muted">
                                <MapPin className="w-4 h-4 mr-3 text-tech-primary" />
                                San Francisco, CA
                            </div>
                            <div className="flex items-center text-sm text-tech-muted">
                                <Building className="w-4 h-4 mr-3 text-tech-primary" />
                                TechNova Inc.
                            </div>
                            <div className="flex items-center text-sm text-tech-muted">
                                <Calendar className="w-4 h-4 mr-3 text-tech-primary" />
                                Joined March 2024
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6 justify-center w-full border-t border-tech-muted/20 pt-4">
                            <a href="#" className="p-2 bg-tech-surface rounded-full text-tech-muted hover:text-white hover:bg-tech-muted/20 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-tech-surface rounded-full text-tech-muted hover:text-[#1DA1F2] hover:bg-tech-muted/20 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-tech-surface rounded-full text-tech-muted hover:text-tech-accent hover:bg-tech-muted/20 transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-lg font-bold text-white mb-4">Developer Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-tech-surface/50 rounded-lg border border-tech-muted/10 text-center">
                                <div className="text-2xl font-bold text-white mb-1">284</div>
                                <div className="text-xs text-tech-muted uppercase tracking-wider">Commits</div>
                            </div>
                            <div className="p-4 bg-tech-surface/50 rounded-lg border border-tech-muted/10 text-center">
                                <div className="text-2xl font-bold text-tech-accent mb-1">12</div>
                                <div className="text-xs text-tech-muted uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="p-4 bg-tech-surface/50 rounded-lg border border-tech-muted/10 text-center">
                                <div className="text-2xl font-bold text-white mb-1">1.2k</div>
                                <div className="text-xs text-tech-muted uppercase tracking-wider">Followers</div>
                            </div>
                            <div className="p-4 bg-tech-surface/50 rounded-lg border border-tech-muted/10 text-center">
                                <div className="text-2xl font-bold text-tech-primary mb-1">4.9</div>
                                <div className="text-xs text-tech-muted uppercase tracking-wider">Rating</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Bio and Activity */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-tech-muted/20 pb-2">About Me</h3>
                        <p className="text-tech-muted leading-relaxed">
                            Passionate software engineer with over 5 years of experience in building scalable web applications.
                            Specializes in React, Node.js, and cloud architecture. Always eager to learn new technologies
                            and contribute to open-source projects. I believe in clean code, robust testing, and exceptional user experiences.
                        </p>

                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'Docker', 'AWS', 'PostgreSQL'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-tech-surface border border-tech-muted/20 rounded-full text-sm text-tech-accent">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-6 border-b border-tech-muted/20 pb-2">
                            <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                            <button className="text-sm text-tech-accent hover:text-tech-primary">View All</button>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <Code className="w-5 h-5 text-tech-primary" />,
                                    title: "Pushed 3 commits to technova-core",
                                    time: "2 hours ago",
                                    desc: "Updated authentication flow and added new middleware for API routes."
                                },
                                {
                                    icon: <Activity className="w-5 h-5 text-tech-accent" />,
                                    title: "Deployed v2.4.0 to Production",
                                    time: "Yesterday",
                                    desc: "Successful deployment of the new analytics dashboard features."
                                },
                                {
                                    icon: <Star className="w-5 h-5 text-yellow-400" />,
                                    title: "Starred repository awesome-react",
                                    time: "3 days ago",
                                    desc: ""
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-tech-surface flex items-center justify-center border border-tech-muted/20 group-hover:border-tech-accent/50 transition-colors z-10">
                                            {item.icon}
                                        </div>
                                        {idx !== 2 && <div className="w-px h-full bg-tech-muted/20 absolute top-10"></div>}
                                    </div>
                                    <div className="pb-2">
                                        <p className="text-white font-medium">{item.title}</p>
                                        <p className="text-xs text-tech-muted mb-1">{item.time}</p>
                                        {item.desc && <p className="text-sm text-tech-muted/80">{item.desc}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
