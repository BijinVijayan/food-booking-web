"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useAppStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

export default function FloatingCart() {
    const router = useRouter();
    const cart = useAppStore((state) => state.cart);
    const [mounted, setMounted] = useState(false);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    if (!mounted || cart.length === 0) return null;

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="fixed bottom-24 left-0 w-full p-4 pb-safe z-40">
            {/* Max-width wrapper for desktop centering */}
            <div className="max-w-md mx-auto">
                <button
                    onClick={() => router.push("/cart")}
                    className="w-full bg-orange-500 text-white rounded-full p-4 px-5 flex items-center justify-between shadow-md shadow-orange-500/25 active:scale-95 transition-transform"
                >
                    <div className="flex flex-row  items-center gap-3 text-sm font-bold">
                        <span className=" uppercase">{totalItems} Items  | </span>
                        <span className="">AED {totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center gap-2 font-bold">
                        <span>VIEW CART</span>
                        <ShoppingBag className="w-5 h-5 " />
                    </div>
                </button>
            </div>
        </div>
    );
}