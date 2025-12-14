"use client";

import { useState } from "react";
import { Upload, User, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
    const [isLoading, setIsLoading] = useState(false);

    // Form States
    const [profile, setProfile] = useState({
        name: "Spicy House Downtown",
        address: "452 Culinary Ave, Food District",
        phone: "+1 (555) 987-6543",
        email: "manager@spicyhouse.com",
    });
    const [acceptingOrders, setAcceptingOrders] = useState(true);

    const handleSave = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert("Settings saved successfully!");
        }, 1500);
    };

    return (
        <div className="max-w-5xl  pb-20">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-zinc-900">Settings</h1>
                <p className="text-zinc-500 mt-1">
                    Manage your restaurant profile, branding, and operational preferences.
                </p>
            </div>

            <div className="space-y-8">

                {/* 1. Shop Profile Section */}
                <section className="bg-white p-6 rounded-3xl border border-zinc-100">
                    <h2 className="text-xl font-bold text-zinc-900 mb-6">Shop Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Restaurant Name"
                            icon={User}
                            value={profile.name}
                            onChange={(v) => setProfile({ ...profile, name: v })}
                        />
                        <InputField
                            label="Address"
                            icon={MapPin}
                            value={profile.address}
                            onChange={(v) => setProfile({ ...profile, address: v })}
                        />
                        <InputField
                            label="Contact Phone"
                            icon={Phone}
                            value={profile.phone}
                            onChange={(v) => setProfile({ ...profile, phone: v })}
                        />
                        <InputField
                            label="Support Email"
                            icon={Mail}
                            value={profile.email}
                            onChange={(v) => setProfile({ ...profile, email: v })}
                        />
                    </div>
                </section>

                {/* 2. Branding Section */}
                <section className="bg-white p-6 rounded-3xl border border-zinc-100">
                    <h2 className="text-xl font-bold text-zinc-900 mb-6">Branding</h2>
                    <p className="text-zinc-500 text-sm mb-6">Upload your logo and a cover image for your restaurant page.</p>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Logo Upload */}
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Logo</label>
                            <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-200 rounded-2xl hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <Upload className="w-8 h-8" />
                                </div>
                                <p className="text-sm text-zinc-500 group-hover:text-orange-600">Click to upload</p>
                                <p className="text-xs text-zinc-400 mt-1">SVG, PNG, JPG (max. 2MB)</p>
                            </div>
                        </div>

                        {/* Cover Image Upload */}
                        <div className="w-full flex-1">
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Cover Image</label>
                            <div className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-zinc-200 rounded-2xl hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer group bg-zinc-50">
                                <div className="flex items-center gap-3 text-zinc-400 group-hover:text-orange-600">
                                    <Upload className="w-6 h-6" />
                                    <span className="text-sm font-medium">Click or drag file to upload</span>
                                </div>
                                <p className="text-xs text-zinc-400 mt-2">Recommended 1200x400px. Max 5MB.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Preferences Section */}
                <section className="bg-white p-6 rounded-3xl border border-zinc-100">
                    <h2 className="text-xl font-bold text-zinc-900 mb-6">Preferences</h2>
                    <div className="relative flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                        <div>
                            <h3 className="font-bold text-zinc-900">Accepting Orders</h3>
                            <p className="text-sm text-zinc-500 mt-1">Turn this off to temporarily pause all incoming orders. Your restaurant will appear as "Currently Unavailable".</p>
                        </div>
                        <button
                            onClick={() => setAcceptingOrders(!acceptingOrders)}
                            className={cn(
                                "absolute max-sm:top-4 max-sm:right-6 sm:relative inline-flex h-5 sm:h-8 w-8 sm:w-14 items-center rounded-full transition-colors",
                                acceptingOrders ? "bg-orange-500" : "bg-zinc-300"
                            )}
                        >
                             <span className={cn(
                                 "inline-block h-4 sm:h-6 w-4 sm:w-6 transform rounded-full bg-white transition-transform",
                                 acceptingOrders ? "translate-x-3.5 sm:translate-x-7" : "translate-x-1"
                             )} />
                        </button>
                    </div>
                </section>

            </div>

            {/* Form Footer */}
            <div className="fixed bottom-0 w-full sm:left-64 right-0 bg-white border-t border-zinc-100 p-4 z-30">
                <div className="max-w-4xl mx-auto flex justify-center sm:justify-end gap-4">
                    <button className="px-6 py-2.5 rounded-xl border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 hover:text-zinc-900 transition-colors">
                        Discard
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isLoading}
                        className="px-6 py-2.5 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 disabled:bg-orange-300 disabled:shadow-none flex items-center gap-2 transition-all active:scale-95"
                    >
                        {isLoading ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>

        </div>
    );
}

// Helper Component for Input Fields
function InputField({ label, icon: Icon, value, onChange }: { label: string, icon: any, value: string, onChange: (v: string) => void }) {
    return (
        <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">{label}</label>
            <div className="relative">
                <Icon className="absolute left-4 top-3.5 w-5 h-5 text-zinc-400" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-50 rounded-xl border border-zinc-100 outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all text-zinc-900"
                />
            </div>
        </div>
    );
}