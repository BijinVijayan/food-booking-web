"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [isLoading, setIsLoading] = useState(false);

    // Refs for OTP inputs to handle auto-focus
    const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep("otp");
        }, 1000);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value !== "" && index < 4) {
            otpRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        // Handle backspace to focus previous input
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-zinc-950 text-white overflow-hidden flex flex-col justify-end">

            <div className="absolute top-0 left-0 w-full h-[45vh] z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950 z-10 mt-10" />
                    <Image
                        src="/images/pizza-login.webp"
                        alt="Pizza Background"
                        fill
                        className="object-cover opacity-60"
                    />
                </div>

            {/* Login Card */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-20 w-full max-w-[94%] mx-auto bg-zinc-900/90 backdrop-blur-md rounded-t-3xl p-10 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
            >
                <div className="flex flex-col gap-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-2">Login or Signup</h1>
                        <p className="text-zinc-400 text-sm">
                            Enter your mobile number to get an OTP
                        </p>
                    </div>

                    <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-5">
                        {/* Phone Input */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-medium text-zinc-300">Mobile Number</label>
                            <div className="flex bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 focus-within:border-orange-500 transition-colors">
                            <span className="p-4 bg-zinc-800 text-zinc-400 border-r border-zinc-700 select-none">
                              +971
                            </span>
                                <input
                                    type="tel"
                                    placeholder="50 123 4567"
                                    className="w-full bg-transparent px-4 outline-none text-white placeholder:text-zinc-600"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    disabled={step === "otp"}
                                />
                            </div>
                        </div>

                        {/* OTP Section - Animates in */}
                        <AnimatePresence>
                            {step === "otp" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mb-4"
                                >
                                    <div className="flex justify-between items-center my-4">
                                        <label className="text-sm font-medium text-zinc-300">Enter 5-digit OTP</label>
                                        <button type="button" className="text-xs text-orange-500 font-semibold hover:text-orange-400">
                                            Resend OTP
                                        </button>
                                    </div>

                                    <div className="flex justify-between gap-2">
                                        {otp.map((digit, idx) => (
                                            <motion.input
                                                key={idx}
                                                ref={(el) => { otpRefs.current[idx] = el }}
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => handleOtpChange(idx, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(idx, e)}
                                                className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 text-center text-xl font-bold focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Action Button */}
                        <button
                            type="submit" // Or type="button" if handling verify separately
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin w-5 h-5" />
                            ) : step === "phone" ? (
                                <>Get OTP <ArrowRight className="w-5 h-5" /></>
                            ) : (
                                "Verify & Proceed"
                            )}
                        </button>
                    </form>

                    <p className="text-center text-xs text-zinc-500 mt-2">
                        By continuing, you agree to our <span className="text-zinc-300">Terms of Service</span> and <span className="text-zinc-300">Privacy Policy</span>.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}