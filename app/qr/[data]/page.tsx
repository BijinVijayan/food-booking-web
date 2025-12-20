"use client";

import { useEffect, useState, use } from "react"; // 1. Import 'use'
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/useStore";
import { motion, Variants } from "framer-motion";
import { Pizza, UtensilsCrossed, Coffee } from "lucide-react";

// Animation Variants...
const containerVariants: Variants = {
    start: { transition: { staggerChildren: 0.2 } },
    end: { transition: { staggerChildren: 0.2 } },
};

const bounceVariants: Variants = {
    start: { y: 0 },
    end: {
        y: -20,
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
        },
    },
};

// 2. Update Interface: params is a Promise
interface QRHandlerProps {
    params: Promise<{
        data: string;
    }>;
}

export default function QRHandler({ params }: QRHandlerProps) {
    // 3. Unwrap the params using React.use()
    const { data } = use(params);

    const router = useRouter();
    const setDiningContext = useAppStore((state) => state.setDiningContext);

    const [parsedData, setParsedData] = useState<{
        slug: string;
        hallId: string;
        tableId: string;
    } | null>(null);

    useEffect(() => {
        if (data) { // 4. Use 'data' directly (not params.data)
            const decodedData = decodeURIComponent(data);
            const parts = decodedData.split("-");

            if (parts.length >= 3) {
                const tableId = parts.pop() as string;
                const hallId = parts.pop() as string;
                const storeSlug = parts.join("-");

                setParsedData({
                    slug: storeSlug,
                    hallId: hallId,
                    tableId: tableId
                });

                setDiningContext(tableId, hallId);

                const timer = setTimeout(() => {
                    router.push("/home");
                }, 3000);

                return () => clearTimeout(timer);
            } else {
                console.error("Invalid QR Format");
            }
        }
    }, [data, setDiningContext, router]); // 5. Update dependency array

    const iconClass = "w-10 h-10 text-orange-500 fill-orange-500/20";

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-zinc-50 dark:bg-zinc-950 px-4">

            <motion.div
                className="flex gap-6"
                variants={containerVariants}
                initial="start"
                animate="end"
            >
                <motion.div variants={bounceVariants}><Pizza className={iconClass} /></motion.div>
                <motion.div variants={bounceVariants}><UtensilsCrossed className={iconClass} /></motion.div>
                <motion.div variants={bounceVariants}><Coffee className={iconClass} /></motion.div>
            </motion.div>

            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Hang tight!
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
                    We are setting up your table...
                </p>
            </div>

            {parsedData && (
                <div className="mt-8 flex flex-col gap-2 rounded-xl bg-white p-4 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 min-w-[280px]">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Store:</span>
                        <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">{parsedData.slug}</span>
                    </div>
                    <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Hall ID:</span>
                        <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">{parsedData.hallId.slice(0, 6)}...</span>
                    </div>
                    <div className="h-px w-full bg-zinc-100 dark:bg-zinc-800" />
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">Table ID:</span>
                        <span className="font-mono font-bold text-orange-600">{parsedData.tableId.slice(0, 6)}...</span>
                    </div>
                </div>
            )}
        </div>
    );
}