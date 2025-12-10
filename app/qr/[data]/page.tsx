"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/useStore";

export default function QRHandler({ params }: { params: { data: string } }) {
    const router = useRouter();
    const setDiningContext = useAppStore((state) => state.setDiningContext);

    useEffect(() => {
        // Assume QR data format is "hallId-tableId"
        // Example: "mainhall-t12"
        if (params.data) {
            const [hall, table] = params.data.split("-");
            setDiningContext(table, hall);

            // Redirect to home with the context set
            router.push("/home");
        }
    }, [params.data, setDiningContext, router]);

    return (
        <div className="flex h-screen w-full items-center justify-center bg-zinc-950 text-white">
            <div className="animate-pulse flex flex-col items-center">
                <p className="text-lg">Setting up your table...</p>
            </div>
        </div>
    );
}