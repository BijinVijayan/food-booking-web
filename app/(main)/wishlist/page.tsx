"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {ChevronLeft, Trash2} from "lucide-react";
import { useAppStore } from "@/store/useStore";
import { Product } from "@/app/api/products/route";

export default function WishlistPage() {
    const router = useRouter();

    // 1. Get Wishlist and Actions from Store
    const wishlist = useAppStore((state) => state.wishlist);
    const toggleWishlist = useAppStore((state) => state.toggleWishlist);
    const addToCart = useAppStore((state) => state.addToCart);

    // 2. Logic: Move to Cart (Add + Remove from Wishlist)
    const moveToCart = (item: Product) => {
        addToCart(item, 1);
        toggleWishlist(item); // Toggle removes it since it's already there
    };

    // 3. Logic: Just Remove
    const removeFromWishlist = (item: Product) => {
        toggleWishlist(item);
    };

    if (wishlist.length === 0) {
        return (
            <div className="flex flex-col h-screen bg-zinc-50 dark:bg-zinc-950">
                <header className="p-4 flex items-center gap-4  dark:bg-zinc-950 z-10">
                    <button onClick={() => router.back()} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full">
                        <ChevronLeft className="w-6 h-6 text-zinc-800 dark:text-white" />
                    </button>
                    <h1 className="text-xl font-bold text-zinc-900 dark:text-white">My Wishlist</h1>
                </header>
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center opacity-60">
                    <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                        <HeartIconPlaceholder />
                    </div>
                    <h2 className="text-lg font-bold mb-2">Your wishlist is empty</h2>
                    <p className="text-sm text-zinc-500">Save your favorite food here to order fast!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24">
            {/* Header */}
            <header className="sticky top-0 z-20 dark:bg-zinc-950 px-4 py-4 flex items-center gap-4">
                <button
                    onClick={() => router.back()}
                    className="p-2 -ml-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-zinc-900 dark:text-white" />
                </button>
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white">My Wishlist</h1>
            </header>

            {/* Wishlist Grid/List */}
            <div className="p-4 flex flex-col gap-4">
                {wishlist.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-4 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800"
                    >
                        {/* Image */}
                        <div className="relative w-24 h-24 shrink-0 rounded-sm overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            <Image
                                src={item.images[0]}
                                alt={item.name}
                                fill
                                sizes="96px"
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white line-clamp-1 text-base">
                                    {item.name}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
                                    AED {item.price.toFixed(2)}
                                </p>
                            </div>

                            {/* Actions Row */}
                            <div className="flex gap-3 mt-2">
                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => moveToCart(item)}
                                    className="flex-1 bg-primary text-white text-sm font-bold py-2.5 rounded-md shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
                                >
                                    Add to Cart
                                </button>

                                {/* Delete Button */}
                                <button
                                    onClick={() => removeFromWishlist(item)}
                                    className="w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 rounded-lg transition-colors active:scale-95"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Simple Icon for Empty State
function HeartIconPlaceholder() {
    return (
        <svg
            className="w-10 h-10 text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}