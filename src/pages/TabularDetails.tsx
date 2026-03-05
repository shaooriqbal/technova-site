import { useState } from 'react';
import { Search, Filter, MoreVertical, ShieldCheck, ShieldAlert, Shield, ChevronDown, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const usersData = [
    { id: 1, name: 'Alex Developer', email: 'alex@technova.example.com', role: 'Admin', status: 'Active', lastLogin: '2024-03-05 09:12 AM' },
    { id: 2, name: 'Sarah Connor', email: 'sarah.c@technova.example.com', role: 'Editor', status: 'Active', lastLogin: '2024-03-05 08:30 AM' },
    { id: 3, name: 'John Smith', email: 'j.smith@technova.example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2024-02-28 04:15 PM' },
    { id: 4, name: 'Emma Wilson', email: 'emma.w@technova.example.com', role: 'Editor', status: 'Active', lastLogin: '2024-03-04 11:45 AM' },
    { id: 5, name: 'Michael Brown', email: 'mbrown@technova.example.com', role: 'Viewer', status: 'Pending', lastLogin: 'Never' },
    { id: 6, name: 'Jessica Davis', email: 'jdavis@technova.example.com', role: 'Admin', status: 'Active', lastLogin: '2024-03-05 10:05 AM' },
    { id: 7, name: 'Daniel Taylor', email: 'dtaylor@technova.example.com', role: 'Viewer', status: 'Inactive', lastLogin: '2023-11-12 02:00 PM' },
];

export default function TabularDetails() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = usersData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'Active': return 'bg-green-500/10 text-green-400 border-green-500/20';
            case 'Inactive': return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
            case 'Pending': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
            default: return 'bg-tech-surface text-tech-muted border-tech-muted/20';
        }
    };

    const getRoleIcon = (role: string) => {
        switch (role) {
            case 'Admin': return <ShieldCheck className="w-4 h-4 text-tech-primary mr-1" />;
            case 'Editor': return <Shield className="w-4 h-4 text-tech-accent mr-1" />;
            case 'Viewer': return <ShieldAlert className="w-4 h-4 text-tech-muted mr-1" />;
            default: return null;
        }
    };

    return (
        <div className="py-8 space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">System Users</h1>
                    <p className="text-tech-muted">Manage user access and permissions across the platform.</p>
                </div>
                <button className="flex items-center gap-2 bg-tech-surface hover:bg-tech-surface/80 text-white font-medium px-4 py-2 rounded-md border border-tech-muted/20 transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Export CSV
                </button>
            </div>

            <div className="glass-panel rounded-xl overflow-hidden border border-tech-muted/20 shadow-2xl">
                {/* Table Toolbar */}
                <div className="p-4 border-b border-tech-muted/20 flex flex-col sm:flex-row justify-between gap-4 bg-tech-surface/30">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-tech-muted" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-tech-muted/20 rounded-md bg-tech-bg text-sm text-white placeholder-tech-muted/50 focus:outline-none focus:ring-1 focus:ring-tech-accent focus:border-tech-accent transition-all duration-300"
                        />
                    </div>

                    <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-tech-bg border border-tech-muted/20 text-white text-sm px-4 py-2 rounded-md hover:bg-tech-surface transition-colors">
                            <Filter className="w-4 h-4" />
                            Filter
                            <ChevronDown className="w-3 h-3 ml-1 text-tech-muted" />
                        </button>
                    </div>
                </div>

                {/* Table Container - Horizontal scroll for small screens */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-tech-surface/50 border-b border-tech-muted/20 text-sm font-medium text-tech-muted uppercase tracking-wider">
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4">Role</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 hidden md:table-cell">Last Login</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-tech-muted/10">
                            {filteredData.length > 0 ? (
                                filteredData.map((user) => (
                                    <tr key={user.id} className="hover:bg-tech-surface/30 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-tech-surface to-tech-bg border border-tech-muted/20 flex items-center justify-center font-bold text-tech-accent">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-white">{user.name}</div>
                                                    <div className="text-xs text-tech-muted">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-white">
                                                {getRoleIcon(user.role)}
                                                {user.role}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusStyle(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-tech-muted hidden md:table-cell">
                                            {user.lastLogin}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-tech-muted hover:text-white transition-colors p-1 rounded hover:bg-tech-surface">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-tech-muted">
                                        No users found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-tech-muted/20 bg-tech-surface/30 flex items-center justify-between">
                    <div className="text-sm text-tech-muted">
                        Showing <span className="font-medium text-white">1</span> to <span className="font-medium text-white">{filteredData.length}</span> of <span className="font-medium text-white">7</span> results
                    </div>
                    <div className="flex gap-1">
                        <button className="p-1 rounded border border-tech-muted/20 bg-tech-bg text-tech-muted hover:text-white disabled:opacity-50" disabled>
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-1 rounded border border-tech-muted/20 bg-tech-bg text-tech-muted hover:text-white">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
