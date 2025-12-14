"use client";

import { useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
            {/* Sidebar - Passed state to control mobile visibility */}
            <Sidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Main Content Area */}
            {/* ml-0 on mobile (full width), ml-64 on desktop (sidebar width) */}
            <div className="flex-1 flex flex-col min-h-screen transition-all duration-300 md:ml-64">

                <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

                <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}