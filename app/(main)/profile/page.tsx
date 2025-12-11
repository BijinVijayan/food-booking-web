"use client";

import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    User,
    Edit2,
    MapPin,
    CreditCard,
    HelpCircle,
    ChevronRight,
    LogOut,
} from "lucide-react";

export default function ProfilePage() {
    const router = useRouter();

    // Mock User Data
    const user = {
        name: "Bijin Ev",
        phone: "+971 524230055",
        email: "bijinev.dev@gmail.com",
        avatar: "/images/avatar-placeholder.jpg"
    };

    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-32">

            {/* 1. Header */}
            <header className="sticky top-0 z-20 dark:bg-zinc-950 px-4 py-4 flex items-center gap-4">
                <button
                    onClick={() => router.back()}
                    className="p-2 -ml-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-zinc-900 dark:text-white" />
                </button>
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Profile</h1>
            </header>

            <div className="p-4 flex flex-col gap-4">
                {/* 2. User Info Card */}
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 flex items-start gap-4">
                    {/* Avatar */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-orange-100 flex items-center justify-center border-2 border-white dark:border-zinc-800 shadow-sm shrink-0">
                        {/* Fallback to Icon if no image */}
                        <User className="w-8 h-8 text-orange-500" />
                        {/* Uncomment below if you have an image */}
                        {/* <Image src={user.avatar} alt="Profile" fill className="object-cover" /> */}
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 pt-1">
                        <div className="flex justify-between items-start">
                            <h2 className="text-lg font-bold text-zinc-900 dark:text-white truncate pr-2">
                                {user.name}
                            </h2>
                            <button className="text-orange-500 hover:text-orange-600 p-1">
                                <Edit2 className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 mb-1">{user.phone}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm">{user.email}</p>
                    </div>
                </div>

                {/* 3. Saved Addresses Section */}
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-bold text-zinc-900 dark:text-white text-base">Saved Addresses</h3>
                    </div>

                    <div className="flex flex-col gap-5">
                        <MenuItem label="Home" subLabel="Villa 12, Jumeirah 1, Dubai" />
                        <MenuItem label="Work" subLabel="Office 303, Business Bay, Dubai" />
                    </div>
                </div>

                {/* 4. Payment Methods Section */}
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-bold text-zinc-900 dark:text-white text-base">Payment Methods</h3>
                    </div>

                    <div>
                        <MenuItem label="Visa ending in .... 4591" />
                    </div>
                </div>

                {/* 5. Support Section */}
                <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                            <HelpCircle className="w-5 h-5 text-orange-500" />
                        </div>
                        <h3 className="font-bold text-zinc-900 dark:text-white text-base">Support</h3>
                    </div>

                    <div className="flex flex-col gap-5">
                        <MenuItem label="Help Center" />
                        <MenuItem label="Contact Us" />
                    </div>
                </div>

                {/* 6. Logout Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 active:scale-95 transition-transform mt-2">
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>

            </div>
        </div>
    );
}

// --- Helper Component for List Items ---
function MenuItem({ label, subLabel }: { label: string, subLabel?: string }) {
    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <div>
                <h4 className="font-medium text-zinc-900 dark:text-white text-sm">{label}</h4>
                {subLabel && (
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-0.5">{subLabel}</p>
                )}
            </div>
            <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-orange-500 transition-colors" />
        </div>
    );
}