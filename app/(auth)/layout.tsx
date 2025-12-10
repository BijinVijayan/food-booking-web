import React from "react";

export default function AuthLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950">
            <div className="w-full max-w-md h-full min-h-screen relative bg-zinc-950 shadow-2xl overflow-hidden">
                {children}
            </div>
        </div>
    );
}